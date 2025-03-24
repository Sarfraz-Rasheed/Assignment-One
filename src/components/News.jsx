import React from 'react'

const News = () => {
  return (
    <>
      <section 
        className='ourWorks py-10 sm:py-20 bg-[url("https://themewagon.github.io/simple/images/gdpr.jpg")] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center space-y-4'
      >     
        <h1 className='text-center text-2xl text-black font-semibold'>
          Do you have any projects? <br />
          Contact us
        </h1>
        <button className='rounded-4xl border border-red-600 text-red-600 px-6 py-2 hover:bg-red-600 hover:text-white transition duration-300 mt-4'>
          Contact Us
        </button>
      </section>
    </>
  )
}

export default News
