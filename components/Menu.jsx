import menus from '@/services/menus';
import styles from '@/styles/Menu.module.css';

export default function Menu() {
  return (
    <header className={`${styles.menu}`}>
      {menus?.map(menu => <p className={`${styles.menu_item}`}>{menu}</p>)}
    </header>
  )
}
