import MainLayout from '../src/components/layouts/main'
import CartPageComponent from '../src/components/pages/cart'
import { useEffect, useState } from 'react'
import allProducts from '../src/utils/products'
import getAllProducts from '../src/utils/cart/getAllProducts'

const CartPage = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setProducts] = useState([])
  useEffect(()=> {
    setProducts(getAllProducts());
    setLoading(false);
  },[])
  return (
    <MainLayout
      breadcrumbs={
      [
        {
          href: '/cart',
          text: 'Cart'
        }
      ]
    }
      seo={{ title: 'Cart' }}
    >
      {
        !loading &&
        (
          <CartPageComponent products={allProducts}/>
        )
      }
    </MainLayout>
  )
}

export default CartPage
