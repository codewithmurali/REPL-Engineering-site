import styles from "./swiper.module.css";
import "swiper/css";
import "./swiper.override.css";
import { useEffect, useState, useRef } from "react";

export const SwiperJsSliderVariant = ({ dataSource }) => {
  const [dataCount, setDataCount] = useState(0);
  const [prevDataCount, setPrevDataCount] = useState(0); // State to store the previous index
  const [isNewImageEntered, setIsNewImageEntered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setDataCount((prevDataCount) => {
        setPrevDataCount(prevDataCount); // Set the previous index before updating to the new one
        return (prevDataCount + 1) % dataSource.length;
      });
    }, 5000);

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [dataSource.length]);

  useEffect(() => {
    // Check if the current index is different from the previous one
    if (dataCount !== prevDataCount) {
      setIsNewImageEntered(true);
    } else {
      setIsNewImageEntered(false);
    }

    // Reset isNewImageEntered after a short delay
    const delay = 5000; // Adjust delay as needed
    const timer = setTimeout(() => {
      setIsNewImageEntered(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dataCount, prevDataCount]);

  return (
    <>
      {dataCount < dataSource.length && (
        <div className={styles.clientsContainer}>
          <div className={styles.swiperSlider}>
            <img
              src={dataSource[dataCount].image}
              alt="product-name"
              className={`${styles.image} ${isNewImageEntered &&
                styles.imageScale}`}
            />
          </div>
        </div>
      )}
    </>
  );
};
