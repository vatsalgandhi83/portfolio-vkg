"use client";

import styles from '@/styles/Home.module.css';
import { TypeAnimation } from 'react-type-animation';
import { userData } from '@/data/user';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const AnimatedName = ({ name }: { name: string }) => {
  const letters = Array.from(name);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={styles.headline}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{ y: -20, rotate: 15, scale: 1.2 }}
          transition={{ type: 'spring', damping: 10, stiffness: 300 }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function Home() {
  return (
    <div className={styles.homeGrid}>
      <div className={styles.textContainer}>
        <AnimatedName name={userData.name} />
        <TypeAnimation
          sequence={userData.animationSequence}
          wrapper="p"
          speed={50}
          className={styles.subHeadline}
          repeat={Infinity}
        />
        <p className={styles.bio}>
          {userData.about}
        </p>
        <div className={styles.socials}>
          {userData.socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <social.icon />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={userData.avatar}
          alt={userData.name}
          width={300}
          height={300}
          className={styles.profileImage}
          priority
        />
      </div>
    </div>
  );
}

