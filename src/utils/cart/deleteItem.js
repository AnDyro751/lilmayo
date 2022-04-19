import { CART_KEY } from './getTotalCartCount'

const deleteItem = (slug) => {

  try {
    const item = localStorage.getItem(CART_KEY)
    const parsed = JSON.parse(item)

    if (!item) {
      return 0
    }
    const elements = parsed.filter((el) => el.slug !== slug)
    localStorage.setItem(CART_KEY, JSON.stringify(elements))
    const counted = elements.map((el) => el.quantity)
    return counted.reduce((el, el2) => {
      return parseInt(el) + parseInt(el2)
    })
  } catch (e) {
    return 0
  }
}
export default deleteItem
