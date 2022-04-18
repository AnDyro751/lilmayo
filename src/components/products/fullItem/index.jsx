import FsLightbox from 'fslightbox-react'
import { useState } from 'react'
import Image from 'next/image'
import ProductInfo from './info'

const ProductFullItem = ({ product }) => {
  const [toggler, setToggler] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <section className="px-40 py-10">
      <FsLightbox
        toggler={toggler}
        sources={product.images}
        key={index}
      />
      <div className="w-full flex space-x-12">
        <div className="relative w-2/4 h-xxxl shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-3xl">
          <Image
            onClick={() => {
              setToggler(!toggler)
              setIndex(0)
            }}
            className="rounded-3xl cursor-pointer"
            objectFit="contain"
            draggable={false}
            src={product.images[0]}
            layout="fill"
          />
        </div>
        <div className="w-2/4 space-y-12">
          <ProductInfo product={product}/>
        </div>
      </div>

    </section>
  )
}

export default ProductFullItem
