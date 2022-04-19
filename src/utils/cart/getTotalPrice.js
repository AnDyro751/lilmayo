import getAllProducts from './getAllProducts'

export default function getTotalPrice () {
  const allproducts = getAllProducts()
  let total = 0
  allproducts.map((element) => {
    total += element.price * parseInt(element.quantity)
  })
  return total
}
