const CART_KEY = '@user/cart'
const getTotalCartCount = () => {
  const item = localStorage.getItem(CART_KEY)
  if (!item) {
    return '(0)'
  }
  try {
    `(${JSON.parse(item).length || 0})`
  } catch (e) {
    localStorage.removeItem(CART_KEY)
  }
}

export default getTotalCartCount
