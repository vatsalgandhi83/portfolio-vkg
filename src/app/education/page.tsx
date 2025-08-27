import Image from 'next/image';
import styles from '@/styles/Page.module.css';
import { userData } from '@/data/user';

export default function Education() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.content}>
        {userData.education.map((edu, index) => (
          <div key={index} className={styles.card}>
            {edu.logo && (
              <div className={styles.logoContainer}>
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  width={60}
                  height={60}
                  className={styles.logo}
                />
              </div>
            )}
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{edu.institution}</h2>
              <p className={styles.cardSubtitle}>{edu.degree}</p>
              {edu.gpa && <p className={styles.gpa}>GPA: {edu.gpa}</p>}
              <p className={styles.cardDates}>
                {edu.dates} • {edu.location}
              </p>
              {edu.coursework && (
                <div className={styles.coursework}>
                  <strong>Relevant Coursework:</strong>
                  <ul className={styles.courseList}>
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
