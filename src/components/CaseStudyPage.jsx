import React from 'react'

const CaseStudyPage = () => {
  return (
    <>
    <div className="caseStudyMain py-10 sm:py-20">
      <div className="intro py-5 text-center">
        <h1 className='text-2xl font-semibold sm:text-4xl'>Our case studies</h1>
        <p className='text-gray-500 mt-1 text-sm sm:text-base'>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
      </div>
      <div className="cards flex flex-wrap justify-center align-middle gap-5">
      <section className="w-fit">
  <div className="w-[256px] group">
    <div className="relative bg-blue-950 group-hover:bg-[rgba(0,51,204,0.8)] transition-colors duration-300 rounded-lg w-full">
      <div className="flex items-center justify-center h-[256px]">
        <img className="w-24 h-24 object-contain" src="https://themewagon.github.io/simple/images/Group95.svg" alt="" />
      </div>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h6 className="text-white pb-2 text-center px-3">Know more about Online Marketing</h6>
        <button className="bg-white text-black py-2 px-3 mt-2 text-sm rounded-lg cursor-pointer hover:bg-red-400 hover:text-white">Read More</button>
      </div>
    </div>
    <h2 className="mt-3 text-lg text-center text-black capitalize">Online Marketing</h2>
    <p className="text-base text-center text-black capitalize">Seo, Marketing</p>
  </div>
</section>

      <section className="w-fit">
  <div className="w-[256px] group">
    <div className="relative bg-green-900 group-hover:bg-[rgba(0,128,0,0.8)] transition-colors duration-300 rounded-lg w-full">
      <div className="flex items-center justify-center h-[256px]">
        <img className="w-24 h-24 object-contain" src="https://themewagon.github.io/simple/images/Group95.svg" alt="" />
      </div>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h6 className="text-white pb-2 text-center px-3">Explore Digital Solutions</h6>
        <button className="bg-white text-black py-2 px-3 mt-2 text-sm rounded-lg cursor-pointer hover:bg-red-400 hover:text-white">Read More</button>
      </div>
    </div>
    <h2 className="mt-3 text-lg text-center text-black capitalize">Digital Solutions</h2>
    <p className="text-base text-center text-black capitalize">Web Development</p>
  </div>
</section>

      <section className="w-fit">
  <div className="w-[256px] group">
    <div className="relative bg-red-700 group-hover:bg-[rgba(204,0,0,0.8)] transition-colors duration-300 rounded-lg w-full">
      <div className="flex items-center justify-center h-[256px]">
        <img className="w-24 h-24 object-contain" src="https://themewagon.github.io/simple/images/Group95.svg" alt="" />
      </div>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h6 className="text-white pb-2 text-center px-3">Enhance User Experience</h6>
        <button className="bg-white text-black py-2 px-3 mt-2 text-sm rounded-lg cursor-pointer hover:bg-red-400 hover:text-white">Read More</button>
      </div>
    </div>
    <h2 className="mt-3 text-lg text-center text-black capitalize">User Experience</h2>
    <p className="text-base text-center text-black capitalize">UI/UX Design</p>
  </div>
</section>

      <section className="w-fit">
  <div className="w-[256px] group">
    <div className="relative bg-yellow-600 group-hover:bg-[rgba(204,153,0,0.8)] transition-colors duration-300 rounded-lg w-full">
      <div className="flex items-center justify-center h-[256px]">
        <img className="w-24 h-24 object-contain" src="https://themewagon.github.io/simple/images/Group95.svg" alt="" />
      </div>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h6 className="text-white pb-2 text-center px-3">Brand Awareness Strategies</h6>
        <button className="bg-white text-black py-2 px-3 mt-2 text-sm rounded-lg cursor-pointer hover:bg-red-400 hover:text-white">Read More</button>
      </div>
    </div>
    <h2 className="mt-3 text-lg text-center text-black capitalize">Brand Awareness</h2>
    <p className="text-base text-center text-black capitalize">Branding, Marketing</p>
  </div>
</section>

      </div>
    </div>
    </>
  )
}

export default CaseStudyPage
