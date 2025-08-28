import styles from '@/styles/Page.module.css';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  const resumeUrl = '/vkg_resume.pdf';

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.resumeContent}>
        <div className={styles.resumeCard}>
          <div className={styles.cardContent}>
            <div className={styles.resumeHeader}>
              <div className={styles.resumeInfo}>
                <h2 className={styles.cardTitle}>My Resume</h2>
                <p className={styles.resumeDescription}>
                  View my professional experience, education, and skills in detail.
                </p>
              </div>
              
              <div className={styles.resumeActions}>
                <a 
                  href={resumeUrl}
                  download="Vatsal_Gandhi_Resume.pdf"
                  className={`${styles.resumeButton} ${styles.downloadButton}`}
                >
                  <Download size={18} />
                  Download PDF
                </a>
                
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.resumeButton} ${styles.viewButton}`}
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </a>
              </div>
            </div>

            <div className={styles.resumeViewer}>
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className={styles.resumeFrame}
                title="Resume PDF Viewer"
              />
              <div className={styles.resumeFallback}>
                <p>Unable to display PDF? <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Click here to view in a new tab</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
