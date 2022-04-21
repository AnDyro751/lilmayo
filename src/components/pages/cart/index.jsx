import { EmptyComponent } from '../../empty'
import CartProduct from '../../cartProduct'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import logos from '../../../../public/Logos-01.png'
import getAllProducts from '../../../utils/cart/getAllProducts'
import getTotalPrice from '../../../utils/cart/getTotalPrice'

const CartPageComponent = ({ products = [] }) => {
  const [allProducts, setAllProducts] = useState(products)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const onHandleDelete = (slug) => {
    const newProducts = allProducts.filter((el) => el.slug !== slug)
    setAllProducts(newProducts)
    toast.success('Product removed from your cart')
  }

  useEffect(() => {
    setTotal(getTotalPrice())
  }, [])

  useEffect(() => {
    setAllProducts(products)
  }, [products])

  const onPay = async () => {
    setLoading(true)
    try {
      const createPaymentLinkResponse = await (await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
          products: getAllProducts()
        })
      })).json()
      if (createPaymentLinkResponse.errors.length >= 1) {
        setLoading(false)
        // toast.error(createPaymentLinkResponse.errors[0] || 'There was an error')
        console.log(createPaymentLinkResponse, "L")
        return
      }
      toast.success('Redirecting to payment page')
      window.location = createPaymentLinkResponse.url
    } catch (e) {
      setLoading(false)
      toast.error('There was an error while paying')
    }
  }

  return (
    <section className="px-4 lg:px-40">
      {
        allProducts.length > 0 &&
        (
          <div className="py-4 lg:py-14">
            <h1 className="text-2xl lg:text-3xl font-medium">Products in your cart</h1>
          </div>
        )
      }

      {
        allProducts.length <= 0 &&
        (
          <EmptyComponent/>
        )
      }
      {
        allProducts.length >= 1 && (
          <section className="flex lg:flex-nowrap flex-wrap">
            <div className="space-y-12 w-full lg:w-8/12">
              {
                allProducts.map((product, i) => (
                  <CartProduct handleDelete={onHandleDelete} product={product} key={i}/>
                ))
              }
            </div>
            <div className="mt-8 lg:mt-0 lg:w-4/12 w-full">
              <p className="text-2xl lg:text-3xl font-medium">Subtotal:</p>
              <p className="text-normal lg:text-lg mt-4 text-gray-600 font-light">
                <span id="cart-total">${total.toFixed(2)}</span>
              </p>
              <p className="text-2xl lg:text-3xl font-medium mt-8">Shipping:</p>
              <p className="text-normal lg:text-lg mt-4 text-gray-600 font-light">Calculated on the payment page</p>
              <div className="w-full mt-8">
                <button
                  disabled={loading}
                  onClick={onPay}
                  className="focus:outline-0 outline-0 disabled:cursor-not-allowed disabled:bg-amber-600 disabled:text-white disabled:opacity-60 w-full text-center justify-center inline-flex items-center px-8 py-3 text-white bg-amber-600 border border-amber-600 rounded hover:bg-transparent hover:text-amber-600 active:text-amber-500 focus:outline-none focus:ring"
                >
                  Go Pay
                </button>
                <div className="relative h-8 mt-8 w-auto">
                  <Image src={logos} priority={false} draggable={false} layout={'fill'} objectFit="contain"/>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </section>
  )
}

export default CartPageComponent
