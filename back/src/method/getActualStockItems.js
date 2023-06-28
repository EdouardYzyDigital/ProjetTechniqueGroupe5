import UserItemModel from "../model/userItemModel.js"

const getActualStockItems = async (itemsBase) => {
    const items = []
    const a = await UserItemModel.query().select()

    itemsBase.forEach(item => {
        const tabRelations = a.filter(el => el.id_item === item.id)
        if (tabRelations !== undefined) {
            item.quantity = item.quantity - tabRelations.length
            items.push(item)
        }
    });

    return items
}
  
export default getActualStockItems;
  