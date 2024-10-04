import React, { useEffect, useState } from "react";
import styles from "@/styles/slider.module.css";
import Image from "next/image";
import Box from '@mui/material/Box';
import Desert from "../public/desert.jpg";
import Bike from "../public/bike.jpg";
import Ski from "../public/ski.jpg";
import Cave from "../public/cave.jpg";

const Slider = () => {
  const data = [Desert, Bike, Ski, Cave];
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
            <Box
              sx={{
                width: { xs: '300px', sm: '450px' }, // 300px for extra-small screens, 450px for small and larger screens
                height: { xs: '200px', sm: '250px' }, // 200px for extra-small screens, 250px for small and larger screens
                position: 'relative', // Required for next/image to work correctly
              }}
              className={styles.imageWrapper}
            >
              <Image
                alt="portrait of Bryan"
                layout="fill" // Fill the parent Box
                objectFit="cover" // Maintain aspect and cover the Box
                src={item.src}
              />
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

