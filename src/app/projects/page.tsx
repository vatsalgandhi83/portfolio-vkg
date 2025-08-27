import styles from '@/styles/Page.module.css';
import { userData } from '@/data/user';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.content}>
        {userData.projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.projectHeader}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <div className={styles.projectLinks}>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.highlights && (
                <ul className={styles.projectHighlights}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className={styles.skillsGrid}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.skillTag}>
                    {tag}
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
