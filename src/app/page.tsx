import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import styles from "@/styles/Layout.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to my portfolio</h1>
        <Button>Test Button</Button>
      </main>
      <Footer />
    </div>
  );
}

