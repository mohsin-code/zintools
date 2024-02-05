import styles from '@/styles/Slider.module.css';
import Item from './Item';
import { useState } from 'react';
import Image from 'next/image';

export default function Slider({ data, title }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 5));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.slider_container}>
      <div className={styles.heading}>
        <h2>{title}</h2>
      </div>
      <div className={styles.slider} >
        {data.slice(startIndex, startIndex + 5).map((item, index) => (
          <Item key={index} data={item} />
        ))}
        <button className={styles.prev} onClick={handlePrev} disabled={startIndex <= 0}><Image width="24" height="24" src="./left.svg" alt='left' /></button>
        <button className={styles.next} onClick={handleNext} disabled={startIndex >= data.length - 5}><Image width="24" height="24" src="./right.svg" alt='right' /></button>
      </div>
    </div>
  )
}
