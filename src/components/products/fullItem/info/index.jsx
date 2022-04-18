import { useState } from 'react'
import AddToCartButton from '../../../addToCartButton'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
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
  return (
    <>
      <h1 className="text-3xl font-medium">{product.name}</h1>
      <h1 className="font-medium text-xl">${product.price.toFixed(2)}</h1>
      <section className="w-full">
        <label htmlFor="quantity" className="text-sm font-light">Quantity</label>
        <div className="w-3/12">
          <input
            type="number"
            id="quantity"
            placeholder="1"
            onChange={handleChange}
            value={quantity}
            className="w-full mt-1 p-3 mt-1 text-sm border-2 border-gray-200 rounded"
          />
        </div>
      </section>
      {
        product.description &&
        (
          <section>
            <div dangerouslySetInnerHTML={{ __html: product.description }}/>
          </section>
        )
      }
      <section className="mt-4">
        <AddToCartButton quantity={quantity} product={product}/>
      </section>
    </>
  )
}

export default ProductInfo
