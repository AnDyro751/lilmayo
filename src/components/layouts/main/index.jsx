import Head from 'next/head'
import Footer from '../../footer'
import Header from '../../header'
import Breadcrumbs from '../../breadcrumbs'

const MainLayout = ({ seo, children, breadcrumbs }) => {
  const { title } = seo
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <main>
        {breadcrumbs &&
        <Breadcrumbs data={breadcrumbs} />
        }
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
