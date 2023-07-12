import style from './styles.module.css'
const Button = ({ value, onClick = () => {}, type = 'primary' }) => {
  return (<>
    <button className={style.button} onClick={() => onClick()} style={
      {
        backgroundColor: {
          secondary: 'rgb(60,60,60)',
          primary: 'rgb(55, 165, 0)'
        }[type]
      }}>

        {value}
    </button>
    </>)
}

export default Button
