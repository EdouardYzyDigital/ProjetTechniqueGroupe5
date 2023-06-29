import ItemModel from "../model/itemModel.js"
import config from "../../config.js"
import UserModel from "../model/userModel.js"
import UserItemModel from "../model/userItemModel.js"
import getActualStockItems from "../method/getActualStockItems.js"
import inArray from "../method/inArray.js"

const itemRoute = ({ app }) => {
  //GET request
  app.get("/items", async (req, res) => {
    const items = await ItemModel.query().select(
      "id",
      "label",
      "quantity"
    )

    const actualStockItems = await getActualStockItems(items)
    res.send(actualStockItems)
  })

  //POST item selected
  app.post("/chooseItems/:userId", async (req, res) => {
    const {
        body: { itemsSelected },
        params: { userId },
    } = req
    
    try {
        const checkUser = await UserModel.findUserById(userId)

        if (!checkUser) {
          return res.status(403).send({ error: "User not found" })
        }

        const itemsUserRelations = await UserItemModel.query().select().where('id_user', checkUser.id)
        const idTabsRelations = itemsUserRelations.map(el => {return el.id_item})
        const idTabsSelected = itemsSelected.map(el => {return el.id})
        
        if (itemsUserRelations?.length === 0 && itemsSelected.length !== 0) {
          console.log('here')
          itemsSelected.forEach(async item => {
            await UserItemModel.query().insertAndFetch( {
              id_user: checkUser.id,
              id_item: item.id
            })
          })
        } else {

          idTabsSelected.forEach(async item => {
            if (!inArray(item, idTabsRelations)) {
              await UserItemModel.query().insertAndFetch( {
                id_user: checkUser.id,
                id_item: item
              })
            }
          })
          idTabsRelations.forEach(async relation => {
            if (!inArray(relation, idTabsSelected)) {
              await UserItemModel.query().delete().where('id_user', checkUser.id).andWhere('id_item', relation)
            }
          })

        }
        res.send("Items selected successfully")
    } catch (err) {
        return res.status(401).send({ error: "Error : " + err })
    }
  }) 

  //GET Items selected By A User
  app.get("/items/:userId", async (req, res) => {
    const {
        params: { userId }
    } = req

    try {
        const checkUser = await UserModel.findUserById(userId)
    
        if (!checkUser) {
            return res.status(403).send({ error: "User not found" })
        }

        const items = await UserItemModel.query().select('id_user', 'id_item').where('id_user', userId)

        res.send(items)
    } catch (err) {
        return res.status(401).send({ error: "Error : " + err })
    }
  })

  //POST request
  //CREATE New ITEM (only for admins)
  app.post("/:adminId/create-item", async (req, res) => {
    const {
      body: { label, quantity },
      params: { adminId },
    } = req

    try {
      const checkAdmin = await UserModel.findUserByIdAndRole(adminId, "admin")

      if (!checkAdmin) {
        return res.status(403).send({ error: "forbidden" })
      }

      const item = await ItemModel.findItemByLabel(label)

      if (item) {
        return res.status(401).send({ error: "your email already exists !" })
      }

      await ItemModel.query().insertAndFetch({
        label,
        quantity
      })

      res.send("Item created successfully")
    } catch (err) {
      return res.status(401).send({ error: "Error : " + err })
    }
  })

  //UPDATE request
  //UPDATE New ITEM (only for admins)
  app.post("/update/:itemId", async (req, res) => {
    const {
      body: { id, label, quantity },
      params: { adminId },
    } = req

    try {
      const checkAdmin = await UserModel.findUserByIdAndRole(adminId, "admin")

      if (!checkAdmin) {
        return res.status(403).send({ error: "forbidden" })
      }

      const item = await ItemModel.query().updateAndFetchById(id, req.body)

      res.send("Item updated")

    } catch (err) {
      return res.status(401).send({ error: "Error : " + err })
    }
  })

  //DELETE ITEM
  app.delete("/:adminId/items/:itemId", async (req, res) => {
    try {
      const {
        params: { itemId, adminId },
      } = req

      const checkAdmin = await UserModel.findUserByIdAndRole(adminId, 2) // role = 2 = "admin"

      if (!checkAdmin) {
        return res.status(403).send({ error: "forbidden" })
      }

      const item = await ItemModel.query().deleteById(Number(itemId))

      if (!item) {
        res.status(403).send("Item not found")
      }

      return res.send()
    } catch (err) {
      return res.status(500).send({ error: "Internal server error : " + err })
    }
  })
}

export default itemRoute
