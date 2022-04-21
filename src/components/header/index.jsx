import logo from '../../../public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import getTotalCartCount from '../../utils/cart/getTotalCartCount'
import { useEffect, useState } from 'react'

const Header = () => {

  const [cartCount, setCartCount] = useState('(0)')
  const [loading, setLoading] = useState(true)
  const [openCanvas, setOpenCanvas] = useState(false)

  useEffect(() => {
    setCartCount(getTotalCartCount())
    setLoading(false)
  }, [])

  return (
    <header className="h-16 lg:h-32 py-3 pl-8 pr-6 lg:py-8 lg:px-20 bg-black flex items-center fixed top-0 left-0 right-0 z-50">
      {
        openCanvas &&
        (
          <section className="fixed inset-y-0 right-0 z-50 flex">
            <div className="w-screen max-w-sm">
              <div className="flex flex-col h-full divide-y divide-gray-200 bg-gray-50">
                <div className="overflow-y-scroll">
                  <header className="flex items-center justify-between h-16 pl-6">
                    <span className="text-sm font-medium tracking-widest uppercase">
                      Menu
                    </span>
                    <button
                      onClick={() => {setOpenCanvas(false)}}
                      aria-label="Close menu"
                      className="w-16 h-16 border-l border-gray-200"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </header>

                  <nav
                    className="flex flex-col text-sm font-medium text-gray-500 border-t border-b border-gray-200 divide-y divide-gray-200"
                  >
                    <Link href="/">
                      <a className="px-6 py-3"> Home </a>
                    </Link>
                    <Link href="/">
                      <a className="px-6 py-3"> Dolls </a>
                    </Link>
                    <Link href="/">
                      <a className="px-6 py-3"> Reviews </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        )
      }
      <div className="w-full lg:w-4/12">
        <Link href="/">
          <a>
            <div className="relative h-12 w-12 lg:h-20 lg:w-20">
              <Image
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/healthbox/image/upload/c_scale,e_blur:100,w_53/v1650320119/lilmayo/logo_cmw53n.webp"
                src="https://res.cloudinary.com/healthbox/image/upload/v1650320119/lilmayo/logo_cmw53n.webp" layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex lg:w-6/12 justify-end items-center space-x-3">
        <LinkComponent href="/" text="Home"/>
        <LinkComponent href="/dolls" text="Dolls"/>
        <LinkComponent href="/reviews" text="Reviews"/>
      </div>
      <div className="w-full lg:w-2/12 flex justify-end text-sm font-light items-center">
        <Link href="/cart">
          <a className="flex px-2 items-center text-white">
            <div>
              <img
                className="w-6 h-6"
                src="data:image/png;base64,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"
              />
            </div>
            <div className="ml-2">
              <span id="cart-quantity">{loading ? '...' : cartCount}</span>
            </div>
          </a>
        </Link>
      </div>
      <button
        onClick={() => {setOpenCanvas(true)}}
        className="flex px-2 lg:hidden w-auto ml-4 flex justify-end text-sm font-light items-center">
        <img
          className="w-12 h-6"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVR4nO3aMQ6AMAwEwZj//9l8AEHlHIpm6hRWtr21AAAAAAAAADhVfT3o7t5xyKmq6vWPr12H8EyAMAHCBAgTIEyAMAEAAAAAAACG2QUNswv6OQHCBAgTIEyAMAHCBAAAAAAAABhmFzTMLujnBAgTIEyAMAHCBAgTAAAAAAAAAACG3E2GDC7VbgLhAAAAAElFTkSuQmCC"/>
      </button>
    </header>
  )
}

const LinkComponent = ({ href, text }) => (
  <div>
    <Link href={href}>
      <a className="text-white py-1 px-2 text-sm font-light hover:underline">
        {text}
      </a>
    </Link>
  </div>
)

export default Header
