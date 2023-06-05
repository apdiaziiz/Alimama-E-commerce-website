import { useSelector } from "react-redux";
import db from '../db';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Sliders = ({jewelery}) => {
    
  return (
    <div>
      <Swiper
        spaceBetween={30}
        // effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        {jewelery.map(state => (
          <SwiperSlide className="slide-img" key={state.id}>
            <img src={state.image} alt={state.id} />
          </SwiperSlide>

        ))}
      </Swiper>
        
    </div>
  )
}

export default Sliders