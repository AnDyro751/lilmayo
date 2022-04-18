import Image from 'next/image'
import Link from 'next/link'

const ProductItem = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="block">
        <div className="flex justify-center">
          <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
        </div>

        <div className="relative h-96">
          <Image
            layout="fill"
            alt={product.name}
            src={product.images[0]}
            className="object-cover w-full -mt-3"
          />
        </div>
        <h5 className="mt-4 text-sm text-black/90 h-12">
          {
            product.name
          }
        </h5>
        <div className="flex items-center justify-between mt-4 font-bold">
          <p className="text-lg">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ProductItem
