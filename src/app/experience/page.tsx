import styles from '@/styles/Page.module.css';
import { userData } from '@/data/user';

export default function Experience() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.content}>
        {userData.experience.map((job, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{job.company}</h2>
              {job.positions.map((position, posIndex) => (
                <div key={posIndex} className={styles.positionContainer}>
                  <div className={styles.positionHeader}>
                    <h3 className={styles.positionTitle}>{position.title}</h3>
                    <p className={styles.cardDates}>{position.duration}</p>
                  </div>
                  <ul className={styles.experienceList}>
                    {position.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
