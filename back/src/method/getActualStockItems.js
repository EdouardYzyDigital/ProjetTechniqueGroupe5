import UserItemModel from "../model/userItemModel.js"

const getActualStockItems = async (itemsBase) => {
    const items = []
    const a = await UserItemModel.query().select()

    itemsBase.forEach(item => {
        const tabRelations = a.filter(el => el.id === item.id)
        if(tabRelations !== undefined)
        console.log('tab relations', tabRelations)
        item.quantity = item.quantity - tabRelations.length
        items.push(item)
    });

    return items
}
  
export default getActualStockItems;
  