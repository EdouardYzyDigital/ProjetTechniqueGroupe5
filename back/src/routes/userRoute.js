import UserModel from "../model/userModel.js"
import config from "../../config.js"
import jsonwebtoken from "jsonwebtoken"
import auth from "../middlewares/auth.js"

const userRoute = ({ app }) => {
  //GET request
  app.get("/users", async (req, res) => {
    const users = await UserModel.query().select(
      "id",
      "first_name",
      "last_name",
      "role",
      "post",
      "picture_face"
    )

    users.forEach((user) => {
      if (user.picture_face && user.picture_face) {
        user.picture_face = user.picture_face.toString("base64")
      }
    })

    res.send(users)
  })

  app.get("/users/:userId", auth, async (req, res) => {
    const {
      params: { userId },
      session: { userId: sessionUserId },
    } = req

    if (Number(userId) != sessionUserId) {
      return res.status(403).send({ error: "access denied !" })
    }

    const user = await UserModel.query()
      .select("id", "first_name", "last_name", "role", "post", "picture_face")
      .findById(userId)

    if (user.picture_face && user.picture_face) {
      user.picture_face = user.picture_face.toString("base64")
    }

    res.send(user)
  })

  //POST request
  //CREATTE USER
  app.post("/:adminId/create-user", async (req, res) => {
    const {
      body: { first_name, last_name, mail, role, post, picture_face },
      params: { adminId },
    } = req

    try {
      const checkAdmin = await UserModel.findUserByIdAndRole(adminId, "admin")

      if (!checkAdmin) {
        return res.status(403).send({ error: "forbidden" })
      }

      const user = await UserModel.findUserByMail(mail)

      if (user) {
        return res.status(401).send({ error: "your email already exists !" })
      }

      await UserModel.query().insertAndFetch({
        first_name,
        last_name,
        mail,
        role,
        post,
        picture_face,
      })

      res.send("User created successfully")
    } catch (err) {
      return res.status(401).send({ error: "Error : " + err })
    }
  })

  //LOGIN
  app.post("/login", async ({ body: { picture_face } }, res) => {
    try {
      const user = await UserModel.findUserById(1)

      if (!user.checkPassword()) {
        return res.status(401).send({ error: "Bad password !" })
      }

      const userId = user.id

      const jwt = jsonwebtoken.sign(
        { payload: { userId: user.id } },
        config.security.session.secret,
        { expiresIn: config.security.session.expiresIn }
      )

      return res.send({ userId, jwt })
    } catch (err) {
      return res.status(500).send({ error: "Internal server error : " + err })
    }
  })

  //DELETE USER
  app.delete("/:adminId/users/:userId", async (req, res) => {
    try {
      const {
        params: { userId, adminId },
      } = req

      const checkAdmin = await UserModel.findUserByIdAndRole(adminId, 2) // role = 2 = "admin"

      if (!checkAdmin) {
        return res.status(403).send({ error: "forbidden" })
      }

      const user = await UserModel.query().deleteById(Number(userId))

      if (!user) {
        res.status(403).send("User not found")
      }

      return res.send()
    } catch (err) {
      return res.status(500).send({ error: "Internal server error : " + err })
    }
  })
}

export default userRoute
