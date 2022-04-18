import MainLayout from '../src/components/layouts/main'
import WelcomeBanner from '../src/components/welcomeBanner'
import dynamic from 'next/dynamic'

const ProductList = dynamic(() => import('../src/components/products/list'))
export default function Home () {
  return (
    <MainLayout
      seo={{
        title: 'Lil Mayo Alien Doll Buy'
      }}
    >
      <WelcomeBanner/>
      <ProductList/>
    </MainLayout>
  )
}
