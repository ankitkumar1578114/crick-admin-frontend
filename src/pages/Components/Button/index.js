import style from './styles.module.css'
const Button = ({ value, onClick }) => {
  return (<>
    <button className={style.button} onClick={() => onClick()}>
        {value}
    </button>
    </>)
}

export default Button
