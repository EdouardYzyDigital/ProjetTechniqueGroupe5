import UserItemModel from "../model/userItemModel.js"

const getActualStockItems = async (itemsBase) => {
    const items = []

    itemsBase.forEach(async item => {
        const itemUsersRelations = await UserItemModel.query().where('id_item', item.id)
        console.log('tab relations', itemUsersRelations)
        item.quantity = item.quantity - itemUsersRelations.length
        items.push(item)
    });

    return items
}
  
export default getActualStockItems;
  