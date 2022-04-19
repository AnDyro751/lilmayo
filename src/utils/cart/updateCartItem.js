import { CART_KEY } from './getTotalCartCount'
import getAllProducts from './getAllProducts'

export default async function updateCartItem (slug, quantity) {

  try {
    const item = localStorage.getItem(CART_KEY)
    const parsed = JSON.parse(item)

    if (!item) {
      return 0
    }

    const element = parsed.find((el) => el.slug === slug)

    if (!element) {
      return 0
    }

    element.quantity = quantity
    localStorage.setItem(CART_KEY, JSON.stringify(parsed))

    const counted = parsed.map((el) => el.quantity)
    return counted.reduce((el, el2) => {
      return parseInt(el) + parseInt(el2)
    })
  } catch (e) {
    return 0
  }
}
