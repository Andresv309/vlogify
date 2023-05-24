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
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={315}>
            <path fill="var(--secondary-color)" transform="translate(32 0)">
              <animate attributeName='d'
                dur="10000ms"
                repeatCount="indefinite"
                
                values='
                M39.1,-57.3C51,-45.1,61.2,-34.2,67.8,-20.5C74.4,-6.7,77.5,9.7,75.3,27C73.1,44.2,65.7,62.2,52.3,60.7C38.9,59.1,19.4,37.9,1.9,35.3C-15.7,32.8,-31.4,48.8,-41.3,49.2C-51.2,49.7,-55.4,34.5,-52.8,22C-50.3,9.5,-41,-0.4,-40.1,-16.1C-39.2,-31.8,-46.8,-53.2,-41.5,-67.6C-36.2,-81.9,-18.1,-89,-2.3,-85.9C13.6,-82.8,27.2,-69.5,39.1,-57.3Z;
                
                M25.3,-43.5C31.9,-30,35.7,-21.4,37.4,-12.9C39.1,-4.4,38.7,4,34.7,9.8C30.8,15.6,23.3,18.7,16.9,25.2C10.6,31.8,5.3,41.8,-5.5,49.4C-16.3,57,-32.7,62.2,-48.1,58.6C-63.6,55,-78.3,42.6,-74.2,30.1C-70,17.5,-47.1,4.8,-33.5,-2.8C-19.9,-10.4,-15.5,-12.9,-11.5,-27.3C-7.4,-41.6,-3.7,-67.9,2.8,-71.8C9.3,-75.6,18.7,-57.1,25.3,-43.5Z;
                
                M20.7,-35.8C26.8,-24.1,31.5,-17.9,41,-8.6C50.4,0.6,64.5,13.1,68.2,28.5C71.9,43.8,65.2,62.1,52.1,65.2C39,68.2,19.5,56,4.8,49.4C-9.8,42.7,-19.7,41.7,-26.8,36.7C-33.8,31.7,-38.1,22.7,-36.4,14.9C-34.7,7.1,-27.1,0.4,-24.4,-8C-21.8,-16.3,-24,-26.2,-20.8,-38.8C-17.5,-51.4,-8.8,-66.6,-0.7,-65.6C7.3,-64.6,14.6,-47.4,20.7,-35.8Z;
                
                M42.3,-62.5C47,-54.8,37.6,-32,42.8,-14.3C48.1,3.4,68,16,69.6,26.3C71.3,36.6,54.8,44.6,40.1,44.4C25.5,44.1,12.7,35.6,-1.3,37.4C-15.3,39.2,-30.7,51.2,-37.1,48.8C-43.5,46.4,-41,29.4,-45.7,14.9C-50.4,0.3,-62.3,-11.9,-58.9,-18.1C-55.5,-24.3,-36.7,-24.5,-24.3,-29.7C-12,-34.9,-6,-45.2,6.4,-54C18.8,-62.8,37.6,-70.2,42.3,-62.5Z;
                
                M26.1,-37.9C29.5,-33.3,25.2,-20.1,25.7,-10.3C26.3,-0.5,31.8,5.8,37.5,19.7C43.3,33.5,49.4,55,43.2,66.7C37,78.4,18.5,80.4,5.4,73C-7.8,65.6,-15.6,48.9,-29.4,39.6C-43.2,30.4,-63,28.7,-73.4,18.7C-83.8,8.7,-84.8,-9.6,-74.1,-18.4C-63.4,-27.1,-41,-26.3,-26.7,-27.4C-12.4,-28.4,-6.2,-31.2,2.6,-34.8C11.3,-38.3,22.6,-42.5,26.1,-37.9Z;
                
                M39.1,-57.3C51,-45.1,61.2,-34.2,67.8,-20.5C74.4,-6.7,77.5,9.7,75.3,27C73.1,44.2,65.7,62.2,52.3,60.7C38.9,59.1,19.4,37.9,1.9,35.3C-15.7,32.8,-31.4,48.8,-41.3,49.2C-51.2,49.7,-55.4,34.5,-52.8,22C-50.3,9.5,-41,-0.4,-40.1,-16.1C-39.2,-31.8,-46.8,-53.2,-41.5,-67.6C-36.2,-81.9,-18.1,-89,-2.3,-85.9C13.6,-82.8,27.2,-69.5,39.1,-57.3Z'
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
