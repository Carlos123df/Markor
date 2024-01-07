export const metadata = {
  title: 'Thankyou',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">ThankYou for Booking Appointment </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="text-gray-400 text-center mt-6">
              Go to Home <Link href="/" className="text-red-600 hover:text-gray-200 transition duration-150 ease-in-out">Lets Go.</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
