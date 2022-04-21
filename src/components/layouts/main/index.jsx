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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="black"/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"/>
      </Head>
      <Header/>
      <main className="mt-16 lg:mt-32">
        {breadcrumbs &&
          <Breadcrumbs data={breadcrumbs}/>
        }
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
