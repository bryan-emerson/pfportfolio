import React, { useEffect, useState } from "react";
import styles from "@/styles/slider.module.css";
import Image from "next/image";

import Desert from "../public/desert.jpg";
import Bike from "../public/bike.jpg";
import Ski from "../public/ski.jpg";
import Cave from "../public/cave.jpg";
import Size from "../public/size.jpg";

const Slider = () => {
  const data = [Desert, Bike, Ski, Cave, Size];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.carouselContainer}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          >
            <div className={styles.imageWrapper}>
              <Image
                alt="portrait of Bryan"
                width="1000"
                height="1000"
                layout="responsive"
                src={item.src}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

//slider implemented next need to creat jump link for about section and start on work section
