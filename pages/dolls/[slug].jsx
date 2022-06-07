import MainLayout from '../../src/components/layouts/main'
import allProducts from '../../src/utils/products'
import getProduct from '../../src/utils/products/get'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const ProductFullItem = dynamic(() => import('../../src/components/products/fullItem'))
const ProductPage = ({ product }) => {

  useEffect(() => {
    /*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit()
          } else {
            loadScript()
          }
        } else {
          loadScript()
        }

        function loadScript () {
          var script = document.createElement('script')
          script.async = true
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script)
          script.onload = ShopifyBuyInit
        }

        function ShopifyBuyInit () {
          var client = ShopifyBuy.buildClient({
            domain: 'lilmayofactory.myshopify.com',
            storefrontAccessToken: 'db72a631e2462ba35bc62bee6374f8e3',
          })
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: product.id,
              node: document.getElementById(`product-component-${product.node}`),
              moneyFormat: '%24%20%7B%7Bamount%7D%7D',
              options: {
                'product': {
                  'styles': {
                    'product': {
                      'width': '100%',
                      'text-align': 'left'
                    },
                    'button': {
                      'font-family': 'Roboto, sans-serif',
                      'font-weight': 'bold',
                      'font-size': '14px',
                      'padding-top': '15px',
                      'padding-bottom': '15px',
                      ':hover': {
                        'background-color': '#c36b05'
                      },
                      'background-color': '#d97706',
                      ':focus': {
                        'background-color': '#c36b05'
                      },
                      width: '100%'
                    },
                    'quantityInput': {
                      'font-size': '14px',
                      'padding-top': '15px',
                      'padding-bottom': '15px',
                    }
                  },
                  'contents': {
                    'img': false,
                    'button': false,
                    'buttonWithQuantity': true,
                    'title': false,
                    'price': false
                  },
                  'text': {
                    'button': 'Add to cart'
                  }
                },
                'productSet': {
                  'styles': {
                    'products': {
                      '@media (min-width: 601px)': {
                        'margin-left': '-20px'
                      }
                    }
                  }
                },
                'modalProduct': {
                  'contents': {
                    'img': false,
                    'imgWithCarousel': true,
                    'button': false,
                    'buttonWithQuantity': true
                  },
                  'styles': {
                    'product': {
                      '@media (min-width: 601px)': {
                        'max-width': '100%',
                        'margin-left': '0px',
                        'margin-bottom': '0px'
                      }
                    }
                  },
                  'text': {
                    'button': 'Add to cart'
                  }
                },
                'option': {},
                'cart': {
                  'text': {
                    'total': 'Subtotal',
                    'button': 'Checkout'
                  },
                  'styles': {
                    'button': {
                      'font-family': 'Roboto, sans-serif',
                      'font-weight': 'bold',
                      'font-size': '14px',
                      'padding-top': '15px',
                      'padding-bottom': '15px',
                      ':hover': {
                        'background-color': '#c36b05'
                      },
                      'background-color': '#d97706',
                      ':focus': {
                        'background-color': '#c36b05'
                      }
                    }
                  },
                  'contents': {
                    'note': true
                  },
                },
                'toggle': {
                  'styles': {
                    'toggle': {
                      'font-family': 'Roboto, sans-serif',
                      'font-weight': 'bold',
                      'background-color': '#d97706',
                      ':hover': {
                        'background-color': '#c36b05'
                      },
                      ':focus': {
                        'background-color': '#c36b05'
                      }
                    },
                  }
                }
              },
            })
          })
        }
      }

    )
    ()
    /*]]>*/
  })

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
      seo={{
        title: product.name,
        image: product.images[0]

      }}
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
