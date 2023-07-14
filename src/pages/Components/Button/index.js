import styles from './styles.module.css'
const Button = ({ value, onClick = () => {}, type = 'primary' }) => {
  return (<>
    <button onClick={() => onClick()} className={
      {
        primary: styles.primary,
        submit: styles.primary,
        secondary: styles.secondary
      }[type]
      }>

        {value}
    </button>
    </>)
}

export default Button
