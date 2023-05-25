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
                <div className=" h-full grid place-items-center grid-cols-1 sm:grid-cols-[63%_37%] sm:py-10 py-8 sm:px-24 px-16 gap-4">
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
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={290}>
            <path fill="var(--secondary-color)" transform="translate(0 0)">
              <animate
                  className='animate-spin' 
                  attributeName='d'
                  dur="9000ms"
                  repeatCount="indefinite"
                  
                  values='
                  M32.7,-40C44.5,-29,57.7,-20.8,62.1,-9C66.5,2.8,62.1,18,55.1,33.3C48.1,48.6,38.5,64,24.2,71.1C10,78.3,-8.9,77.2,-23.9,69.9C-38.9,62.6,-50.2,49,-48.3,35.9C-46.4,22.7,-31.3,9.9,-25.8,-1.6C-20.2,-13.1,-24.1,-23.2,-21.4,-35.9C-18.7,-48.5,-9.4,-63.6,0.5,-64.2C10.4,-64.9,20.9,-51.1,32.7,-40Z;

                  M35.3,-47.3C45.3,-33.6,52.8,-22.1,59.6,-7.1C66.3,8,72.3,26.6,64.9,35.5C57.4,44.5,36.5,43.7,18.9,48.7C1.3,53.7,-13.1,64.5,-29.6,65.4C-46.2,66.3,-64.9,57.3,-72.9,42.5C-81,27.7,-78.3,7.2,-72.8,-11C-67.4,-29.1,-59.2,-44.9,-46.5,-58.2C-33.9,-71.4,-17,-82.2,-2.2,-79.6C12.6,-77,25.2,-61,35.3,-47.3Z;

                  M31.5,-44.6C39.9,-30.6,45.1,-19.7,49.8,-6.8C54.5,6.2,58.7,21.2,54,32.9C49.3,44.5,35.7,52.7,23.9,50.5C12,48.2,1.8,35.5,-12.4,31.5C-26.6,27.4,-44.8,31.9,-48,27.3C-51.1,22.7,-39,9,-33.8,-3.5C-28.6,-15.9,-30.3,-27,-25.8,-41.8C-21.3,-56.5,-10.7,-74.9,0.5,-75.5C11.6,-76,23.2,-58.7,31.5,-44.6Z;
                  
                  M24.2,-29.3C34.3,-20.3,47.5,-15.5,53.2,-6C58.9,3.5,57.1,17.7,50,27.6C42.8,37.5,30.2,43,16,51.5C1.7,60,-14.2,71.4,-26.9,68.9C-39.6,66.4,-49,50.1,-49.1,35.4C-49.3,20.6,-40.2,7.6,-32.6,-0.6C-25,-8.7,-18.9,-12,-13.7,-21.9C-8.5,-31.7,-4.3,-48.2,1.4,-49.9C7,-51.5,14.1,-38.3,24.2,-29.3Z;
                  
                  M26.7,-40.5C29.6,-29.4,23.6,-16.3,31.4,-1.2C39.3,13.9,61.1,30.9,62.8,44C64.5,57.1,46,66.3,28.9,67.2C11.8,68.2,-3.8,60.9,-20.6,55.3C-37.4,49.8,-55.3,46,-62.1,35.3C-68.9,24.6,-64.6,7,-54.5,-2.5C-44.4,-12.1,-28.4,-13.5,-18.4,-23.3C-8.3,-33.1,-4.2,-51.4,3.9,-56C11.9,-60.6,23.8,-51.6,26.7,-40.5Z;
                  
                  M32.7,-40C44.5,-29,57.7,-20.8,62.1,-9C66.5,2.8,62.1,18,55.1,33.3C48.1,48.6,38.5,64,24.2,71.1C10,78.3,-8.9,77.2,-23.9,69.9C-38.9,62.6,-50.2,49,-48.3,35.9C-46.4,22.7,-31.3,9.9,-25.8,-1.6C-20.2,-13.1,-24.1,-23.2,-21.4,-35.9C-18.7,-48.5,-9.4,-63.6,0.5,-64.2C10.4,-64.9,20.9,-51.1,32.7,-40Z'
              />            
            </path> 
          </svg>
        </div>

        <div className='absolute hidden md:block bottom-[-5rem] right-[2rem]'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={400}>
            <path fill="var(--secondary-color)" transform="translate(85 73)"> 
              <animate 
                  attributeName='d'
                  dur="11000ms"
                  repeatCount="indefinite"
                  
                  values='M60.6,-57.4C76.5,-44.7,85.8,-22.4,83.4,-2.4C81,17.5,66.7,35,50.9,48.5C35,62,17.5,71.4,-0.8,72.2C-19,72.9,-38,65,-49.4,51.5C-60.7,38,-64.4,19,-63.6,0.8C-62.8,-17.4,-57.5,-34.8,-46.1,-47.4C-34.8,-60,-17.4,-67.9,2.5,-70.3C22.4,-72.8,44.7,-70,60.6,-57.4Z;
                  
                  M52.4,-52.7C61.6,-43.2,58.5,-21.6,57,-1.5C55.5,18.6,55.6,37.1,46.4,49.7C37.1,62.3,18.6,68.9,-1.6,70.5C-21.8,72.1,-43.5,68.7,-60.2,56.1C-76.8,43.5,-88.3,21.8,-85.8,2.5C-83.3,-16.8,-66.8,-33.5,-50.2,-43.1C-33.5,-52.7,-16.8,-55.1,2.4,-57.5C21.6,-59.9,43.2,-62.3,52.4,-52.7Z;
                  
                  M54.6,-48.3C70.3,-39,82.1,-19.5,80.5,-1.6C78.9,16.4,64,32.7,48.3,44.4C32.7,56.1,16.4,63.2,1.2,62C-13.9,60.7,-27.7,51.1,-36.1,39.4C-44.5,27.7,-47.5,13.9,-50.3,-2.8C-53.1,-19.4,-55.6,-38.8,-47.2,-48.1C-38.8,-57.3,-19.4,-56.5,0.1,-56.6C19.5,-56.6,39,-57.6,54.6,-48.3Z;
                  
                  M38.4,-35.8C50.6,-26.1,62.1,-13.1,64.3,2.2C66.5,17.4,59.3,34.8,47.1,48.2C34.8,61.7,17.4,71.2,-1.7,72.9C-20.7,74.6,-41.5,68.4,-50.2,54.9C-59,41.5,-55.7,20.7,-56.6,-0.9C-57.5,-22.6,-62.7,-45.2,-54,-54.9C-45.2,-64.7,-22.6,-61.5,-4.8,-56.7C13.1,-51.9,26.1,-45.5,38.4,-35.8Z;
                  
                  M44,-39.8C59.6,-28.4,76.6,-14.2,81.2,4.7C85.9,23.5,78.2,47,62.6,57.4C47,67.8,23.5,65,2.3,62.7C-18.9,60.3,-37.7,58.5,-53.2,48.1C-68.8,37.7,-80.9,18.9,-77.5,3.4C-74.1,-12.1,-55.1,-24.1,-39.6,-35.6C-24.1,-47,-12.1,-57.9,1.1,-58.9C14.2,-60,28.4,-51.3,44,-39.8Z;
                  
                  M47,-49.1C58.8,-35.2,64.8,-17.6,63.7,-1.1C62.6,15.4,54.5,30.9,42.7,40.7C30.9,50.6,15.4,54.8,-2.2,57C-19.9,59.3,-39.8,59.5,-53.4,49.7C-67,39.8,-74.3,19.9,-73.1,1.1C-72,-17.7,-62.5,-35.3,-48.9,-49.2C-35.3,-63.1,-17.7,-73.3,0,-73.3C17.6,-73.2,35.2,-63,47,-49.1Z;
                  
                  M60.6,-57.4C76.5,-44.7,85.8,-22.4,83.4,-2.4C81,17.5,66.7,35,50.9,48.5C35,62,17.5,71.4,-0.8,72.2C-19,72.9,-38,65,-49.4,51.5C-60.7,38,-64.4,19,-63.6,0.8C-62.8,-17.4,-57.5,-34.8,-46.1,-47.4C-34.8,-60,-17.4,-67.9,2.5,-70.3C22.4,-72.8,44.7,-70,60.6,-57.4Z'
              />
            </path>
          </svg>
        </div>

      </div>  
    </div>




  );
};


// top-[-4.2rem] left-1/4 z-1 
