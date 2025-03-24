import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomerFeedbackCarousel = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'Tony Martinez',
      title: 'Marketing Manager',
      message: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      img: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Sophia Armstrong',
      title: 'Marketing Manager',
      message: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      img: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Cody Lambert',
      title: 'Marketing Manager',
      message: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      img: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'Emma Watson',
      title: 'Designer',
      message: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      img: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 5,
      name: 'John Doe',
      title: 'Developer',
      message: 'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
      img: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <div className="py-10 sm:py-20 text-center px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-2 sm:text-4xl">What our customers have to say</h1>
      <p className='text-gray-500 mt-1 text-sm sm:text-base mb-4'>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={true}
        pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="bg-[#f3f7fb] p-6 rounded-xl mx-2 shadow mt-10 transition-transform transform hover:scale-105 duration-300">
              <div className="flex flex-col items-center">
                <img src={feedback.img} alt={feedback.name} className="w-20 h-20 rounded-full mb-4" />
                <p className="text-gray-600 mb-4 text-center">{feedback.message}</p>
                <h3 className="text-lg font-bold">{feedback.name}</h3>
                <span className="text-red-500 block mt-1 mb-1 h-[2px] w-10 bg-red-500"></span>
                <p className="text-gray-500 text-sm">{feedback.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination mt-6 flex justify-center"></div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          display: none;
          background-color: red;
          width: 12px;
          height: 12px;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
};

export default CustomerFeedbackCarousel;
