import { Model } from "objection"

class ItemModel extends Model {
  static tableName = "item"

  static findItemByLabel(name) {
    return ItemModel.query().findOne({ name })
  }

  static findItemById(id) {
    return ItemModel.query().findOne({ id })
  }

//   static findUserByIdAndRole(id, role) {
//     return ItemModel.query().findOne({ id, role })
//   }
}

export default ItemModel
