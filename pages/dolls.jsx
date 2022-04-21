import ProductList from '../src/components/products/list'
import MainLayout from '../src/components/layouts/main'

export default function DollsPage () {
  return (
    <MainLayout seo={{ title: 'Products in Lil Mayo shop' }}>
      <ProductList/>
    </MainLayout>
  )
}
