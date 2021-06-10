import styles from "../styles/Home.module.css";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className={styles.container}>
      <Table x={4} y={4} />
    </div>
  );
}
