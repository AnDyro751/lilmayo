import Head from 'next/head'
import Footer from '../../footer'
import Header from '../../header'

const MainLayout = ({ seo, children }) => {
  const { title } = seo
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
