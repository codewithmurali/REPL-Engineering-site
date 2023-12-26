import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import styles from "./swiper.module.css";
import 'swiper/css';
import "./swiper.override.css";

export const SwiperJsSlider = ({ dataSource }) => {
  return (
    <div className={styles.clientsContainer}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          1000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          412: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {dataSource.map((item, index) => {
          if (index <= 5) {
            return (
              <SwiperSlide className={styles.swiperSlider}>
                <img src={item.img} alt={item.name} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      <div className={styles.bottomSliderContainer}>
        {dataSource.map((item, index) => {
          if (index >= 6) {
            return (
              <div className="bottomSlider">
                <img src={item.img} alt={item.name} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
