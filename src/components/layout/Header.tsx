import Link from "next/link";
import styles from '@/styles/Header.module.css';
import { Home, GraduationCap, Wrench, FolderGit2, Briefcase, FileText, Mail } from 'lucide-react';

const Header = () => {
  return (
    <div className={styles.header}>
      <header className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Home className={styles.icon} /> Home
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navList}>
            <Link href="#education" className={styles.navLink}><GraduationCap className={styles.icon} /> Education</Link>
            <Link href="#skills" className={styles.navLink}><Wrench className={styles.icon} /> Skills</Link>
            <Link href="#projects" className={styles.navLink}><FolderGit2 className={styles.icon} /> Projects</Link>
            <Link href="#experience" className={styles.navLink}><Briefcase className={styles.icon} /> Experience</Link>
            <Link href="#resume" className={styles.navLink}><FileText className={styles.icon} /> Resume</Link>
            <Link href="#contact" className={styles.navLink}><Mail className={styles.icon} /> Contact</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
