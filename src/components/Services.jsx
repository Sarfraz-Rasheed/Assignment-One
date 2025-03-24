import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Speed Optimization",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      img: "https://themewagon.github.io/simple/images/Group12.svg"
    },
    {
      title: "SEO and Backlinks",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      img: "https://themewagon.github.io/simple/images/Group7.svg"
    },
    {
      title: "Content Marketing",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      img: "https://themewagon.github.io/simple/images/Group5.svg"
    }
  ];
  
  return (
    <section className='ourWorks py-10 sm:py-20'>      
      <div className='text-center mb-10 px-4'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>How does it work?</h1>
        <p className='text-gray-500 mt-4 text-sm sm:text-base'>
          One theme that serves as an easy-to-use operational toolkit <br className='hidden sm:block' />
          that meets customer's needs.
        </p>
      </div>
      
      <div className='cards grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card bg-white rounded-lg p-5 max-w-[260px] w-full text-center sm:text-left"
          >
            <div className="thumbnail mb-4 flex justify-center sm:justify-start">
              <img src={service.img} alt={service.title} className='w-15' />
            </div>
            <div className="title text-xl font-bold mb-2">{service.title}</div>
            <div className="text text-gray-500 mb-4">{service.description}</div>
            <button className='text-blue-500 text-sm no-underline'>Read More</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
