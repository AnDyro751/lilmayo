
const ProductInfo = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl lg:text-3xl font-medium mt-8 lg:mt-0">{product.name}</h1>
      <h1 className="font-medium text-xl">${product.price.toFixed(2)}</h1>
      {
        product.description &&
        (
          <section>
            <div dangerouslySetInnerHTML={{ __html: product.description }}/>
          </section>
        )
      }
      <section className="mt-4">
        <div className="relative" id={`product-component-${product.node}`}/>
      </section>
    </>
  )
}

export default ProductInfo
