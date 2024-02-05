import styles from '@/styles/Navbar.module.css';
import Menu from './Menu';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.topbar}>
        <div className="logo">
          <Image src="/icon.svg" alt="Logo" />
          <h2>ZinTools</h2>
        </div>
        <div className={styles.search_container}>
          <input type="text" className={styles.search} placeholder='Search for Movies, TV Shows, Themes & Cast' />
          <Image src="./search.svg" alt="Search" width="18" height="18" className={styles.search_icon} />
        </div>
        <div className={styles.auth}>
          <b>Login</b>
          <button>Sign Up</button>
        </div>
      </div>
      <Menu />
    </nav>
  )
}
