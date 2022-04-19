import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import updateCartItem from '../../utils/cart/updateCartItem'

const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1)
  const handleChange = (e) => {
    setQuantity(e.target.value || 1)
  }

  const updateStorage = async () => {
    document.querySelector('#cart-quantity').innerHTML = await updateCartItem(product.slug, quantity)
  }

  useEffect(() => {
    updateStorage()
  }, [quantity])

  return (
    <article className="flex space-x-6">
      <div className="w-auto">
        <div className="bg-gray-100 border border-black rounded h-20 w-20 relative">
          <Image
            className="h-20 w-20 rounded"
            src={product.images[0]}
            height={20}
            width={20}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="10/12 flex flex-wrap">
        <div className="w-full">
          <Link href={`/products/${product.slug}`}>
            <a className="text-lg">
              {product.name}
            </a>
          </Link>
        </div>
        <div className="w-4/12 mt-2">
          <label className="text-sm text-gray-600" htmlFor={`quantity_${product.slug}`}>
            Quantity
          </label>

          <input
            type="number"
            id={`quantity_${product.slug}`}
            placeholder="1"
            onChange={handleChange}
            value={quantity}
            className="w-full mt-1 p-3 mt-1 text-sm border-2 border-gray-200 rounded"
          />
        </div>
      </div>
    </article>
  )
}

export default CartProduct
