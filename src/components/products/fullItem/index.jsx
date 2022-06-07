import FsLightbox from 'fslightbox-react'
import { useState } from 'react'
import Image from 'next/image'
import ProductInfo from './info'

const ProductFullItem = ({ product }) => {
  const [toggler, setToggler] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <section className="px-4 py-4 lg:px-40 lg:py-10">
      <FsLightbox
        toggler={toggler}
        sources={product.images}
        key={index}
      />
      <div className="w-full flex lg:flex-nowrap flex-wrap lg:space-x-12">
        <div className="relative w-full lg:w-2/4 h-80 lg:h-xxxl shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black lg:rounded-3xl rounded-xl">
          <Image
            onClick={() => {
              setToggler(!toggler)
              setIndex(0)
            }}
            className="rounded-3xl cursor-pointer object-contain lg:object-cover"
            objectFit="contain"
            draggable={false}
            src={product.images[0]}
            layout="fill"
          />

        </div>
        <div className="w-full lg:w-2/4 space-y-6 lg:space-y-12 lg:px-8 px-2">
          <ProductInfo product={product}/>
        </div>
      </div>

    </section>
  )
}

export default ProductFullItem
