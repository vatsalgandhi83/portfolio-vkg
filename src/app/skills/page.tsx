import styles from '@/styles/Page.module.css';
import { userData } from '@/data/user';

export default function Skills() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.content}>
        {userData.skills.map((skillCategory, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{skillCategory.skillType}</h2>
              <div className={styles.skillsGrid}>
                {skillCategory.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
