const stripe = require('stripe')('sk_test_51Kq7WVJiKjtN9wFf6allWS2JNyFfYLAsiQPUb3nMzBNwUgsnFqiEEDwkt5NTFW2zuA8TlM2I4gD1spLmEidG9rjg00Jw3xB8Xk')

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ errors: ['Invalid request'] })
  }
  const allItems = []
  const products = JSON.parse(req.body).products
  products.map((product) => {
    const newItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: parseInt(product.quantity) || 1,
    }
    allItems.push(newItem)
  })
  console.log(allItems, "ALL", products)
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: allItems,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'MX'],
      },
      allow_promotion_codes: true,
      shipping_options: [
        {
          shipping_rate: 'shr_1Kq7i1JiKjtN9wFfWdV34AX0',
        },
        {
          shipping_rate: 'shr_1Kq7hcJiKjtN9wFfUhDjJq4k',
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    })

    res.status(200).json({ url: session.url, errors: [] })
  } catch (e) {
    res.status(400).json({ url: null, errors: [e.toString()] })
  }
}
