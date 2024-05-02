// NavigationBar.js
import Link from 'next/link';
import styles from '../page.module.css'; 

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href='/'>
          My Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
