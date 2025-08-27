import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import styles from "@/styles/Layout.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to my portfolio</h1>
      </main>
      <Footer />
    </div>
  );
}

