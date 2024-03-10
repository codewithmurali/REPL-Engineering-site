import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./swiper.module.css";
import "swiper/css";
import "./swiper.override.css";
import AnimatedText from "../../../pages/home_page/demo";
import { useState } from "react";

export const SwiperJsSliderVariant = ({ dataSource }) => {
  const [preNode, setPreNode] = useState(null);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    const prevSlideIndex = swiper.previousIndex;

    if (preNode) {
      preNode.childNodes[1]?.classList.remove("ml12");
    }

    const activeNode = swiper.slides[activeSlideIndex];
    const prevNode = swiper.slides[prevSlideIndex];

    if (activeNode) {
      setPreNode(activeNode);
      activeNode.childNodes[1]?.classList.add("ml12");
    }

    if (prevNode) {
      setPreNode(prevNode);
    }
  };

  return (
    <div className={styles.clientsContainer}>
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {dataSource.map((item, index) => {
          return (
            <SwiperSlide className={styles.swiperSlider} key={index}>
              <img src={item.image} alt="slider" />
              <AnimatedText
                text={item.name}
                className={styles.text}
                slideChanged={preNode}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
