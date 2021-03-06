import allProducts from '../../src/utils/products'

const stripe = require('stripe')('sk_test_51Kq7WVJiKjtN9wFf6allWS2JNyFfYLAsiQPUb3nMzBNwUgsnFqiEEDwkt5NTFW2zuA8TlM2I4gD1spLmEidG9rjg00Jw3xB8Xk')

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ errors: ['Invalid request'] })
  }
  const allItems = []
  const products = JSON.parse(req.body).products
  const fetchedProducts = allProducts()
  const validProducts = []
  fetchedProducts.map((product) => {
    const item = products.find((el) => el.slug === product.slug)
    if (item) {
      validProducts.push(item)
    }
  })

  validProducts.map((product) => {
    // dynamic_tax_rates: [
    //   '{{FIRST_TAX_RATE_ID}}',
    //   '{{SECOND_TAX_RATE_ID}}',
    //   // additional tax rates
    // ],
    const newItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: parseInt(product.quantity) || 1,
      dynamic_tax_rates: ['txr_1KrjjEJiKjtN9wFfRTufhvez'],
      adjustable_quantity: {
        enabled: true,
        maximum: 10,
      }
    }
    allItems.push(newItem)
  })
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: allItems,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'MX', 'PL'],
      },
      allow_promotion_codes: true,
      shipping_options: [
        {
          shipping_rate_data: {
            fixed_amount: {
              amount: 49 * 100,
              currency: 'USD',
            },
            type: 'fixed_amount',
            display_name: 'Shipping',
          }
        },
      ],
      mode: 'payment',
      success_url: 'https://lilmayo.vercel.app/success',
      cancel_url: 'https://lilmayo.vercel.app/cart',
    })

    res.status(200).json({ url: session.url, errors: [] })
  } catch (e) {
    res.status(400).json({ url: null, errors: [e.toString()] })
  }
}
