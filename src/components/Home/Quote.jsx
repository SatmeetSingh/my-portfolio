import styles from "./home.module.css";
// import { BsMouse } from "react-icons/bs";
function Quote() {
  return (
    <>
      {/* <BsMouse className={styles.mouse} /> */}
      <div className={styles.bg}>
        <div className={styles.blur}>
          <p>
            &quot;If debugging is the process of removing software bugs, then
            programming must be the process of putting them in&quot;
          </p>
          <h3>Edsger Dijkstra</h3>
        </div>
      </div>
    </>
  );
}

export default Quote;
