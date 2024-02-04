import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.logo}`}>
        <img src="/icon.svg" alt="Logo" />
        <h2>ZinTools</h2>
      </div>
      <div className={`${styles.search_container}`}>
        <input type="text" className={`${styles.search}`} placeholder='Search for Movies, TV Shows, Themes & Cast'/>
        <img src="./search.svg" alt="Search" width="18" height="18" className={`${styles.search_icon}`} />
      </div>
      <div className={`${styles.auth}`}>
        <b>Login</b>
        <button>Sign Up</button>
      </div>
    </nav>
  )
}
