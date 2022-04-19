import { EmptyComponent } from '../../empty'
import CartProduct from '../../cartProduct'

const CartPageComponent = ({ products = [] }) => {
  return (
    <section className="px-40">
      {
        products.length > 0 &&
        (
          <div className="py-14">
            <h1 className="text-3xl font-medium">Products in your cart</h1>
          </div>
        )
      }

      {
        products.length <= 0 &&
        (
          <EmptyComponent/>
        )
      }
      <div className="space-y-12" >
        {
          products.map((product, i) => (
            <CartProduct product={product} key={i}/>
          ))
        }
      </div>
    </section>
  )
}

export default CartPageComponent
