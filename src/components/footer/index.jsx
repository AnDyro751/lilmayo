import getCurrentYear from '../../utils/dates/getCurrentYear'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-20 flex flex-wrap space-y-8 text-center font-light">
      <section className="w-full">
        © {getCurrentYear()} {' '} AlienStore
      </section>
      <section className="w-full">
        <Link href="/policy">
          <a className="underline text-sm font-light">Privacy Policy</a>
        </Link>
      </section>
    </footer>
  )
}

export default Footer
