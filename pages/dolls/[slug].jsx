import MainLayout from '../../src/components/layouts/main'
import allProducts from '../../src/utils/products'
import getProduct from '../../src/utils/products/get'
import dynamic from 'next/dynamic'

const ProductFullItem = dynamic(() => import('../../src/components/products/fullItem'))
const ProductPage = ({ product }) => {
  return (
    <MainLayout
      breadcrumbs={
        [
          {
            href: `/dolls`,
            text: 'Products'
          },
          {
            href: `/dolls/${product.slug}`,
            text: product.name
          }
        ]
      }
      seo={{ title: product.name }}
    >
      <ProductFullItem product={product}/>
    </MainLayout>
  )
}

export default ProductPage

export async function getStaticProps ({ params }) {
  const product = getProduct(params?.slug)

  return {
    notFound: !product,
    props: {
      product: product
    },
    revalidate: 60,
  }
}

export async function getStaticPaths (context, demo) {
  const products = allProducts()
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }))

  return {
    paths, fallback: 'blocking'
  }

}
