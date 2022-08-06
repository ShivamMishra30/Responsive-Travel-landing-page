import React from 'react'

function Footer() {
  return (
    <>
      <section className=" rounded-lg px-4 ">
    <div className="max-w-7xl mx-auto py-16 px-10 bg-brand-primaryLight sm:py-24 sm:px-6 lg:px-8 sm:text-center rounded-3xl ">
        <h2 className=" text-4xl font-semibold text-white tracking-wide mb-4">grouple</h2>
        <p className="mt-1 text-3xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">“The customer of future are not only asking for efficiency, 
            they want experiences, happiness and relationships.”,<br/><p className="text-right  text-3xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl mt-2"> - Gerd Leonhard</p></p>
    </div>
</section>
      {/* Footer */}
      <div className="flex flex-col items-center justify-center bg-gray-100  p-5 text-center">
        <h1 className="text-base font-semibold text-gray-800">
          © 2021-2022 All rights reserved | Build with ❤ by{' '}
          <span className="cursor-pointer font-semibold hover:text-sky-600">
            Grouple{' '}
          </span>
        </h1>
      </div>
    </>
  )
}

export default Footer
