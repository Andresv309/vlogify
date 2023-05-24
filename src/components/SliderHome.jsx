// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Shape from '../../public/shape.svg'
// import { EffectFade } from 'swiper';
// import { Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper styles
// import 'swiper/css';
// const Swiper = new Swiper('.swiper', {
//   // Install modules
//   modules: [Navigation, Pagination, Scrollbar],
//   speed: 500,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // ...
// });

import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

export function SliderHome ({ authors }) {
  // console.log(authors)
  return (
    <div className="w-full h-140 sm:h-80">
      <div className="relative w-full h-full pb-8">
        <Swiper
          // spaceBetween={50}
          // slidesPerView={3}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          // modules={[EffectFade]} effect="fade"
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          className="mySwiper h-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          rewind={true}
          style={{
            "--swiper-theme-color": "var(--secondary-color)"
          }}
        >
          {
          authors.map(author => {
            const {name, href, authorSrc} = author
            return (
              <SwiperSlide key={name}>
                <div className=" h-full grid place-items-center grid-cols-1 sm:grid-cols-[60%_40%] sm:py-10 py-8 sm:px-24 px-16 gap-4">
                  <div className="flex flex-col gap-5 text-center sm:text-left">
                    <h4 className="sm:text-[2.4rem] font-bold text-[1.8rem]">
                      ¡Hola! Mi nombre es
                      <span className='block'>{name}</span>
                    </h4>
                      <a
                        href={href}
                        className='text-[var(--secondary-color)] hover:underline'
                      >Te invito a leer mis posts aquí</a>                   
                  </div>

                  <img
                    src={authorSrc.src}
                    alt={name}
                    className="rounded-full w-52"
                  />
                </div>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
        

        <div className='absolute hidden md:block w-full top-0 left-0'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={500}>
            <path fill="var(--secondary-color)" d="M39.6,-53.2C52.4,-45.2,64.6,-35.1,71,-21.6C77.4,-8.1,77.9,8.7,71.3,21.3C64.6,33.8,50.6,42.1,37.5,44.6C24.4,47.1,12.2,43.8,-2.4,47.1C-17,50.4,-34,60.2,-42.4,56.2C-50.8,52.2,-50.6,34.3,-55.6,18.2C-60.7,2.1,-71,-12.1,-68.8,-23.4C-66.6,-34.7,-51.9,-43,-38.4,-50.8C-24.9,-58.5,-12.4,-65.8,0.5,-66.4C13.4,-67.1,26.8,-61.2,39.6,-53.2Z" transform="translate(0 0)"/>
          </svg>
        </div>

        <div className='absolute hidden md:block bottom-[-5rem] right-[2rem]'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={500}>
            <path fill="var(--secondary-color)" d="M40,-52.3C50.5,-47.4,56.8,-34,58.6,-20.8C60.4,-7.7,57.7,5.1,56.7,21.6C55.7,38.2,56.5,58.6,47.4,64.1C38.2,69.7,19.1,60.4,0.7,59.4C-17.6,58.4,-35.3,65.6,-48.8,61.5C-62.3,57.3,-71.8,41.9,-69,27.8C-66.2,13.7,-51.3,0.9,-45.2,-13.7C-39.1,-28.3,-41.8,-44.8,-35.7,-51.1C-29.7,-57.5,-14.8,-53.7,0,-53.6C14.7,-53.6,29.5,-57.2,40,-52.3Z" transform="translate(100 100)" />
          </svg>
        </div>


      </div>  
    </div>


  );
};

// top-[-4.2rem] left-1/4 z-1 
