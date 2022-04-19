import { CART_KEY } from './getTotalCartCount'
import allProducts from '../products'

const getAllProducts = () => {
  try {
    const item = localStorage.getItem(CART_KEY)
    if (item) {
      const parsed = JSON.parse(item)
      const products = allProducts()
      const addedProducts = []
      parsed.map((el) => {
        const newAdded = products.find((pro) => pro.slug === el.slug)
        newAdded.quantity = el.quantity
        addedProducts.push(newAdded)
      })
      return addedProducts
    }
    return []
  } catch (e) {
    localStorage.removeItem(CART_KEY)
    return []
  }
}
export default getAllProducts
