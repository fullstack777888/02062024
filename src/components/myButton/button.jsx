
import styles from './button.module.css'; // Import your CSS file for styling

const Button = ({text , children}) => {
  return (
    <button className={styles['my-button']} >
        {children}
    </button>
  );
};

export default Button;