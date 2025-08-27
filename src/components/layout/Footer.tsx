import { userData } from "@/data/user";
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
