import Image from 'next/image'
import image from '../../../public/banner1.webp'
import imageCta from '../../../public/imgcta.JPG'
import Link from 'next/link'
import lil from '../../../public/lil.png'

const WelcomeBanner = () => {
  return (
    <section className="w-full relative">
      <div className="relative h-96 lg:h-xxl -z-10">
        <Image src={image} layout="fill" objectFit="cover"/>
        <div className="absolute bg-black bg-opacity-40 z-10 h-full w-full"/>
        <div className="z-50 flex items-center flex-wrap text-white w-full h-full">
          <div className="z-50 w-full text-center space-y-8">
            <h1 className="text-4xl lg:text-7xl font-medium w-full">Alien Store</h1>
            <h3 className="w-full">Lil Mayo Doll For Sale</h3>
            <h4 className="w-full">Buy your own lifesize alien doll - Worldwide shipping</h4>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-20 relative">
        <div className="relative w-8/12 hidden lg:block" >
          <div className="h-full absolute h-xl w-full z-40 rounded-3xl shadow-2xl"
          style={{
            "clipPath": "polygon(0 25%, 0 100%, 100% 100%, 56% 67%, 39% 42%)",
            backgroundColor: "#d97706"
          }}
          >
          </div>
        </div>
        <div className="hidden lg:block lg:absolute h-xxl w-80 lg:-mt-72 lg:ml-24 z-30">
          <Image src={lil} layout="fill" objectFit="cover" className="shadow-2xl"/>
        </div>
        <aside
          className="lg:h-xl -mt-12 lg:-mt-20 border-2 border-black rounded-xl lg:rounded-3xl overflow-hidden z-50 overflow-hidden text-white lg:grid bg-black lg:grid-cols-2 lg:items-center"
        >

          <div className="p-6 lg:p-12 lg:ml-60 lg:-mt-16 text-center sm:p-16 lg:p-8 lg:text-left z-40">
            <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
              <Link href="/dolls/lil-mayo-alien-doll-premium-lifesize-alien-prop">
                <a
                  className="mt-8 relative inline-block text-sm lg:font-medium text-orange-600 group active:text-orange-500 focus:outline-none focus:ring"
                >
                  <span
                    className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-orange-600 group-hover:translate-y-0 group-hover:translate-x-0"
                  />
                  <span className="relative block px-6 py-2 lg:px-8 lg:py-3 bg-white border border-current text-lg">
                      Buy It!
                  </span>
                </a>
              </Link>
              <p className="text-xl lg:text-2xl font-bold sm:text-4xl mt-12">
                Buy your own lifesize alien doll - Worldwide shipping
              </p>

            </div>
          </div>

          <div className="lg:pt-16 z-40">
            <div className="relative w-full h-36 sm:h-96 lg:h-[450px]">
              <Image
                src={imageCta}
                draggable={false}
                objectFit="cover"
                layout="fill"
                className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default WelcomeBanner
