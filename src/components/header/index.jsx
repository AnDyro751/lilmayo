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
                    <Link href="/dolls">
                      <a className="px-6 py-3"> Dolls </a>
                    </Link>
                    <Link href="/reviews">
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
