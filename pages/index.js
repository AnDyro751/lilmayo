import MainLayout from '../src/components/layouts/main'
import WelcomeBanner from '../src/components/welcomeBanner'

export default function Home () {
  return (
    <MainLayout
      seo={{
        title: 'Lil Mayo Alien Doll Buy'
      }}
    >
      <WelcomeBanner/>
    </MainLayout>
  )
}
