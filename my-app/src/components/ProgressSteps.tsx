import styles from "@/styles/progress-steps.module.css";
import { useState } from "react";
export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 4;

  function handlePrev() {
    setCurrentStep(count - 1);
  }

  function handleNext() {
    currentStep(count + 1);
  }
  return (
    <div className={styles.all}>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.progressContainer}>
            <div className={styles.progress} />
            <div className={styles.circle}>1</div>
            <div className={styles.circle}>2</div>
            <div className={styles.circle}>3</div>
            <div className={styles.circle}>4</div>
          </div>
        </div>
        <button className={styles.btn} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.btn} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
