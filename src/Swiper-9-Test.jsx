// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import images
import Office from './assets/office.jpg';
import Meeting from './assets/meeting.jpg';
import Empty from './assets/empty.jpg'

//import css
import Styles from './swiperstyles.css'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Office} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Empty} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Meeting} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Office} alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};