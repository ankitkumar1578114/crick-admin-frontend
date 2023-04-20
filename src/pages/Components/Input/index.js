import style from '../Layout/styles.module.css'
const Input = ({ label, _key, register, required }) => (
    <>
    <div>
      <div><label className={style.label}>{label}</label></div>
      <div><input className={style.input} {...register(_key, { required })} /></div>
    </div>
    </>
)
export default Input
