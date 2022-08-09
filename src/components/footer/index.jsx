import getCurrentYear from '../../utils/dates/getCurrentYear'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pt-10 mt:pt-0 px-4 md:p-20 flex flex-wrap md:flex-nowrap justify-between">
      <div className="space-y-4" >
        <p>LIL MAYO SAS DE CV</p>
        <p>
        <Link href="/return">
          <a>Returns & Exchange Policy</a>
        </Link>
        </p>
        <p>
        <Link href="/shipping">
          <a>Shipping / Ordering FAQ</a>
        </Link>
        </p>
      </div>
      <div className="flex space-x-4" >
        <section className='flex flex-wrap space-y-8 md:text-center font-light' >
          <section className="w-full">
            © {getCurrentYear()} {' '} AlienStore
          </section>
          <section className="w-full">
            <Link href="/policy">
              <a className="underline text-sm font-light">Privacy Policy</a>
            </Link>
          </section>
        </section>
      </div>
      <div className="space-y-4" >
        <p>LIL MAYO SAS DE CV</p>
        <p>+52 4612270495</p>
        <p>
          <a href="mailto:info@lilmayoshop.com"></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
