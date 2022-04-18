import allProducts from './index'

const getProduct = (slug) => {
  if (!slug) {
    return null
  }

  return allProducts().find((el) => el.slug === slug)
}

export default getProduct
