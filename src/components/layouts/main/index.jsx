import Head from 'next/head'
import Footer from '../../footer'
import Header from '../../header'
import Breadcrumbs from '../../breadcrumbs'
import { useRouter } from 'next/router'

const MainLayout = ({ seo, children, breadcrumbs }) => {
  const { title, ogType = 'article', image } = seo
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{`${title} | Lil Mayo Shop`}</title>
        <meta name="description" content={`${title} | Buy Lil Mayo Doll`}/>
        <meta name="keywords" content="shop, toy,lil mayo,lil,alien,mayo,doll,stripe,visa,checkout,merch,toys"/>
        <meta property="og:url"
              content={`https://lilmayo.vercel.app/${router.pathname}`}/>
        <meta property="og:type" content={ogType}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={`${title} | Buy Lil Mayo Doll`}/>

        {
          image &&
          (
            <meta property="og:image"
                  content={image}/>
          )
        }
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
