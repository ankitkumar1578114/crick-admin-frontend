import style from './styles.module.css'
const RadioButton = ({ value, name, label }) => (
    <div>
        <input type="radio" className={style.radio} value={value} name={name}/>{label}
    </div>
)
export default RadioButton
