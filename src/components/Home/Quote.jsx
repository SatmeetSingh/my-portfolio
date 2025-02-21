import styles from './home.module.css'; // Ensure you have the styles imported

function Quote() {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.bg}>
        <div className={styles.blur}>
          <p>
            &quot;If debugging is the process of removing software bugs, then
            programming must be the process of putting them in&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
