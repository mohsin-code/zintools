import styles from '@/styles/Grid.module.css';
import { heading } from '@/styles/GridTitle.module.css';
import GridItem from './GridItem';

export default function Grid() {
  return (
    <div className={styles.grid_container}>
      <div className={heading}>
        <h2>Title</h2>
      </div>
      <div className={styles.grid}>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </div>
  )
}
