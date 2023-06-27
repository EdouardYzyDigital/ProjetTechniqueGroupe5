import { Model } from "objection"

class UserModel extends Model {
  static tableName = "user"

  async checkPassword() {
    return true
  }

  static findUserByMail(mail) {
    return UserModel.query().findOne({ mail })
  }

  static findUserByRole(role) {
    return UserModel.query().findOne({ role })
  }

  static findUserById(id) {
    return UserModel.query().findOne({ id })
  }

  static findUserByIdAndRole(id, role) {
    return UserModel.query().findOne({ id, role })
  }
}

export default UserModel
