"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/styles/Header.module.css';
import { Home, GraduationCap, Wrench, FolderGit2, Briefcase, FileText, Mail } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/education", text: "Education", icon: GraduationCap },
    { href: "/skills", text: "Skills", icon: Wrench },
    { href: "/projects", text: "Projects", icon: FolderGit2 },
    { href: "/experience", text: "Experience", icon: Briefcase },
    { href: "/resume", text: "Resume", icon: FileText },
    { href: "/contact", text: "Contact", icon: Mail },
  ];

  return (
    <div className={styles.header}>
      <header className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            <Home className={styles.icon} /> Home
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navList}>
            {navLinks.map((link) => {
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
