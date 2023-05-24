// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
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
            delay: 2000,
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
      </div>  
    </div>


  );
};
