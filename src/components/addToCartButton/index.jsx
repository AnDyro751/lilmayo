import { useState } from 'react'
import addItemToCart from '../../utils/cart/addItem'
import { toast } from 'react-hot-toast'

const AddToCartButton = ({ product, quantity }) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const addToCartResponse = await addItemToCart(product, quantity)
    toast.success('Product added to cart')
    document.querySelector('#cart-quantity').innerHTML = addToCartResponse
    setLoading(false)
  }

  return (
    <div className="w-8/12">
      <button
        onClick={handleClick}
        disabled={loading}
        className="focus:outline-0 outline-0 disabled:cursor-not-allowed disabled:bg-amber-600 disabled:text-white disabled:opacity-60 w-full text-center justify-center inline-flex items-center px-8 py-3 text-white bg-amber-600 border border-amber-600 rounded hover:bg-transparent hover:text-amber-600 active:text-amber-500 focus:outline-none focus:ring">
        Add to cart
      </button>
    </div>
  )
}

export default AddToCartButton
