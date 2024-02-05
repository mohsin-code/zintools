import styles from '@/styles/Item.module.css';
import Image from 'next/image';

export default function Item({ data }) {
  return (
    <div className={styles.item_container}>
      <Image width="64" height="64" src={data.image} alt={data.imageAlt} />
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  )
}
