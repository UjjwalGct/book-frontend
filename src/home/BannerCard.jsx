

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/autoplay";

// import "./BannerCard.css";

// // Import modules
// import { EffectCards, Autoplay } from "swiper/modules";

// const BannerCard = () => {
//   return (
//     <div className="banner">
//       <Swiper
//         effect="cards"
//         grabCursor={true}
//         modules={[EffectCards, Autoplay]}
//         autoplay={{
//           delay: 2000, // time between slides (2 seconds)
//           disableOnInteraction: false, // keep autoplay even after manual swipe
//         }}
//         loop={false} // ✅ After last slide, start again from first
//         className="mySwiper"
//       >
//         <SwiperSlide className="slide1">Book 1</SwiperSlide>
//         <SwiperSlide className="slide2">Book 2</SwiperSlide>
//         <SwiperSlide className="slide3">Book 3</SwiperSlide>
//         <SwiperSlide className="slide4">Book 4</SwiperSlide>
//         <SwiperSlide className="slide5">Book 5</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default BannerCard;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./BannerCard.css";
import { EffectCards, Autoplay } from "swiper/modules";

const BannerCard = () => (
  <div className="banner">
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={false}
      className="mySwiper"
    >
      <SwiperSlide className="slide1">Book 1</SwiperSlide>
      <SwiperSlide className="slide2">Book 2</SwiperSlide>
      <SwiperSlide className="slide3">Book 3</SwiperSlide>
      <SwiperSlide className="slide4">Book 4</SwiperSlide>
      <SwiperSlide className="slide5">Book 5</SwiperSlide>
    </Swiper>
  </div>
);

export default BannerCard;
