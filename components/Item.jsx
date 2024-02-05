import styles from '@/styles/Item.module.css';
import Image from 'next/image';

export default function Item({ data, condition, setBookmarks }) {
  const handleBookmark = () => {
    if (!condition) {
      setBookmarks(prev => [...prev, data]);
    } else {
      setBookmarks(prev => prev.filter(item => item.title !== data.title));
    }
  };
  
  return (
    <div className={styles.item_container}>
      <div>
        <Image width="64" height="64" src={data.image} alt={data.imageAlt} />
        <Image width="21" height="21" src={`${condition ? './bookmarked.svg' : './bookmark.svg'}`} alt={data.imageAlt} onClick={handleBookmark} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  )
}
