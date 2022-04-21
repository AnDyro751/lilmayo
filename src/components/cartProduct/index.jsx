import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import updateCartItem from '../../utils/cart/updateCartItem'
import deleteItem from '../../utils/cart/deleteItem'
import getTotalPrice from '../../utils/cart/getTotalPrice'

const CartProduct = ({ product, handleDelete }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1)
  const handleChange = (e) => {
    const value = e.target.value
    try {
      if (!value) {
        setQuantity(1)
        return
      }
      if (parseInt(value) <= 0) {
        setQuantity(1)
        return
      }
      setQuantity(value || 1)
    } catch (e) {
      setQuantity(1)
    }
  }

  const updateStorage = async () => {
    document.querySelector('#cart-quantity').innerHTML = await updateCartItem(product.slug, quantity)
    document.querySelector('#cart-total').innerHTML = `$${getTotalPrice().toFixed(2)}`
  }

  const onHandleDelete = async () => {
    document.querySelector('#cart-quantity').innerHTML = await deleteItem(product.slug)
    document.querySelector('#cart-total').innerHTML = `$${getTotalPrice().toFixed(2)}`

    handleDelete(product.slug)
  }

  useEffect(() => {
    updateStorage()
  }, [quantity])

  return (
    <article className="flex space-x-4 lg:space-x-6">
      <div className="w-auto">
        <div className="bg-gray-100 border border-black rounded h-16 w-16 lg:h-20 lg:w-20 relative">
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
          <Link href={`/dolls/${product.slug}`}>
            <a className="text-normal lg:text-lg">
              {product.name}
            </a>
          </Link>
        </div>
        <div className="w-full mt-2">
          <span className="text-gray-600 text-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="w-8/12 lg:w-4/12 mt-2">
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
        <div className="w-full mt-2">
          <button onClick={onHandleDelete} className="text-red-600 text-xs p-1">Remove</button>
        </div>
      </div>
    </article>
  )
}

export default CartProduct
