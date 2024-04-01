//import images
import Office from './assets/office.jpg';
import Meeting from './assets/meeting.jpg';
import Empty from './assets/empty.jpg'

//import css
import Styles from './swiperstyles.css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



function SwiperTest10() {
  return (
    <swiper-container
    slides-per-view="3"
    grid-rows="3"
    mousewheel-force-to-axis="true">
  <swiper-slide><img src={Office} alt="" /></swiper-slide>
  <swiper-slide><img src={Meeting} alt="" /></swiper-slide>
  <swiper-slide><img src={Empty} alt="" /></swiper-slide>
  ...
</swiper-container>
  )
}

export default SwiperTest10

