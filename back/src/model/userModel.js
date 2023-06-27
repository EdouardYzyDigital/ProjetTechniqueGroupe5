import { Model } from "objection"
import compareFace from "../middlewares/compareFace.js"
import convertByteToBase64 from "../middlewares/convertByteToBase64.js"

class UserModel extends Model {
  static tableName = "user"

  async checkPassword() {
    const user1 = await UserModel.findUserById(2)
    const user2 = await UserModel.findUserById(3)
    const convert1 = convertByteToBase64(user1.picture_face)
    const convert2 = convertByteToBase64(user2.picture_face)

    return compareFace(
      "data:image/jpeg;base64," + convert1,
      "data:image/jpeg;base64," + convert2
    )
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
