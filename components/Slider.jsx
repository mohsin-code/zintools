import styles from '@/styles/Slider.module.css';
import { heading } from '@/styles/GridTitle.module.css';
import GridItem from './GridItem';
import { useState } from 'react';
import Image from 'next/image';

export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);

  let items = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 4));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.slider_container}>
      <div className={heading}>
        <h2>Title</h2>
      </div>
      <div className={styles.slider}>
        {items.slice(startIndex, startIndex + 4).map((item, index) => (
          <GridItem key={index} />
        ))}
        <button className={styles.prev} onClick={handlePrev}><Image src="./left.svg" alt='left' /></button>
        <button className={styles.next} onClick={handleNext}><Image src="./right.svg" alt='right' /></button>
      </div>
    </div>
  )
}
