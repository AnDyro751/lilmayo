import MainLayout from '../../src/components/layouts/main'
import allProducts from '../../src/utils/products'
import getProduct from '../../src/utils/products/get'

const ProductPage = ({ product }) => {
  return (
    <MainLayout
      breadcrumbs={
        [
          {
            href: `/products`,
            text: 'Products'
          },
          {
            href: `/products/${product.slug}`,
            text: product.name
          }
        ]
      }
      seo={{ title: product.name }}
    >
      <h1>HOLA Producto</h1>
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
