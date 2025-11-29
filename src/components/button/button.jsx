import { useState } from 'react';
import styles from './button.module.css';

function Button({ size, text }) {
  const [hover, setHover] = useState();

  return (
    <>
      <div className={styles.buttonContainer}>{text}</div>
    </>
  );
}

export default Button;
