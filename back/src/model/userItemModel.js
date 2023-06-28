import { Model } from "objection"

class UserItemModel extends Model {
  static tableName = "user_item"

  static findItemById(id) {
    return UserItemModel.query().findOne({ id })
  }

}

export default UserItemModel
