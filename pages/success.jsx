import MainLayout from '../src/components/layouts/main'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccessPage ({}) {
  return (
    <MainLayout
      seo={{
        title: 'Thanks for your purchase'
      }}
    >
      <div className="px-4 py-10 text-center">
        <h1 className="text-3xl font-medium">Thanks for your purchase</h1>
        <h3 className="mt-6">In a few moments you will receive an email with the details of your purchase.</h3>
        <div className="relative h-56 w-56 mx-auto mt-12" >
          <Image
            layout="fill"
            blurDataURL="https://res.cloudinary.com/healthbox/image/upload/c_scale,e_blur:100,h_10/v1650568848/lilmayo/GORRA-ICON1_itayu7.png"
            src="https://res.cloudinary.com/healthbox/image/upload/v1650568848/lilmayo/GORRA-ICON1_itayu7.png"
          />
        </div>
        <h4 className="mt-12 italic text-sm">Thank you for trusting Lil Mayo</h4>
        <div className="mt-6" >
          <Link href="/">
            <a className="italic underline">Go Home</a>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
