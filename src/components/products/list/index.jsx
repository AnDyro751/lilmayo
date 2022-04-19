import ProductItem from '../item'
import allProducts from '../../../utils/products/index'

const ProductList = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <span className="inline-block w-12 h-1 bg-red-700"/>

          <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            Products
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
          {allProducts().map((product, i) => (
            <ProductItem product={product} key={i}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
