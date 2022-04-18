export const CART_KEY = '@user/cart'
const getTotalCartCount = () => {
  const item = localStorage.getItem(CART_KEY)
  if (!item) {
    return '(0)'
  }
  try {
    const parsed = JSON.parse(item)
    const counted = parsed.map((el) => el.quantity)
    const allCount = counted.reduce((el, el2) => {
      return parseInt(el) + parseInt(el2)
    })
    return `(${allCount})`
  } catch (e) {
    localStorage.removeItem(CART_KEY)
    return '(0)'
  }
}

export default getTotalCartCount
