"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/styles/Header.module.css';
import { Home, GraduationCap, Wrench, FolderGit2, Briefcase, FileText } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  const firstRowLinks = [
    { href: "/", text: "Home", icon: Home },
    { href: "/education", text: "Education", icon: GraduationCap },
    { href: "/skills", text: "Skills", icon: Wrench },
  ];

  const secondRowLinks = [
    { href: "/projects", text: "Projects", icon: FolderGit2 },
    { href: "/experience", text: "Experience", icon: Briefcase },
    { href: "/resume", text: "Resume", icon: FileText },
  ];

  return (
    <div className={styles.header}>
      <header className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.navRow}>
            {firstRowLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                  <link.icon className={styles.icon} /> {link.text}
                </Link>
              );
            })}
          </div>
          <div className={styles.navRow}>
            {secondRowLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                  <link.icon className={styles.icon} /> {link.text}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
