import { CART_KEY } from './getTotalCartCount'

export default async function addItemToCart (product, quantity = 1) {
  const addedItem = {
    slug: product.slug,
    quantity: quantity,
    price: product.price
  }
  const item = localStorage.getItem(CART_KEY)
  try {
    const parsed = JSON.parse(item)
    if (item) {
      const findItem = parsed.find((el) => el.slug === product.slug)
      if (findItem) {
        findItem.quantity = parseInt(findItem.quantity) + parseInt(quantity)
      } else {
        parsed.push(addedItem)
      }
      const counted = parsed.map((el) => el.quantity)
      const allCount = counted.reduce((el, el2) => parseInt(el) + parseInt(el2))

      localStorage.setItem(CART_KEY, JSON.stringify(parsed))
      return allCount || 0
    }
  } catch (e) {
    localStorage.removeItem(CART_KEY)
    return 0
  }

  localStorage.setItem(CART_KEY, JSON.stringify([addedItem]))
  return 1
}
