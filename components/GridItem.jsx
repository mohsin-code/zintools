import styles from '@/styles/GridItem.module.css';
import Image from 'next/image';

export default function GridItem() {
  const data = {
    image: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
    imageAlt: "word",
    title: "PDF to Word",
    desc: "The best Word to PDF converter online."
  };

  return (
    <div className={styles.item_container}>
      <Image src={data.image} alt={data.imageAlt} />
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  )
}
