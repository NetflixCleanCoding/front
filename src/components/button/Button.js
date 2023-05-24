import styles from "./Button.module.css"
const Button = ({test}) =>{
return<button className={styles.button}>{test}</button>;
};
export default Button;