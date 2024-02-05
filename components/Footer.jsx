import styles from '@/styles/Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <p>Follow us</p>
        <svg xmlnsXlink="http://www.w3.org/2000/svg" fill="currentColor" xmlSpace="preserve" viewBox="0 0 409.592 409.592" width="24" height="24">
          <path d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"></path>
        </svg>
        <svg xmlnsXlink="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
        </svg>
        <svg xmlnsXlink="http://www.w3.org/2000/svg" fill="currentColor" xmlSpace="preserve" viewBox="0 0 155.139 155.139" width="24" height="24">
          <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path>
        </svg>
      </div>
      <div className={styles.links}>
        <ul>
          <h4>Internal Links</h4>
          <li>Documentation</li>
          <li>Themes</li>
          <li>Chrome Cast</li>
        </ul>
        <ul>
          <h4>Enterprise</h4>
          <li>Download Chrome Browser</li>
          <li>Chrome Browser for Enterprise</li>
          <li>Chrome Browser Devices</li>
          <li>Chrome OS</li>
          <li>Google Cloud</li>
          <li>Google Workspace</li>
        </ul>
        <ul>
          <h4>Internal Links</h4>
          <li>Documentation</li>
          <li>Themes</li>
          <li>Chrome Cast</li>
        </ul>
        <ul>
          <h4>Enterprise</h4>
          <li>Download Chrome Browser</li>
          <li>Chrome Browser for Enterprise</li>
          <li>Chrome Browser Devices</li>
          <li>Chrome OS</li>
          <li>Google Cloud</li>
          <li>Google Workspace</li>
        </ul>
        <ul>
          <h4>Internal Links</h4>
          <li>Documentation</li>
          <li>Themes</li>
          <li>Chrome Cast</li>
        </ul>
      </div>
      <div className={styles.policy}>
        <div className="logo">
          <Image src="/icon.svg" alt="Logo" />
          <h2>ZinTools</h2>
        </div>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li>Cookies Policy</li>
          <li>About us</li>
          <li>Contact</li>
          <li>EULA</li>
          <li className={styles.dark}>
            <Image src="./dark.svg" alt="darkmode" width="24px"/>
          </li>
        </ul>
      </div>
    </footer>
  )
}
