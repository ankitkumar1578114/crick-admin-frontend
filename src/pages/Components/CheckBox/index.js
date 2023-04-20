import style from './styles.module.css'
const CheckBox = ({ value, name, label }) => (
    <div>
        <input type="checkbox" className={style.checkbox} value={value} name={name}/>{label}
    </div>
)
export default CheckBox
