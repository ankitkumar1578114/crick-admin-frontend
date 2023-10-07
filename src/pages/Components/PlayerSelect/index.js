import React from 'react'
import style from '../Layout/styles.module.css'
// eslint-disable-next-line react/display-name
const PlayerSelect = React.forwardRef(({ onChange, onBlur, name, label, options, placeholder = '', loading, disabled, error, rules }, ref) => (
    <>
    <div>
        <div>
        <label className={style.label}>{label}</label>
        </div>
        <div>
        <select className ={style.input} name={name} onChange={onChange} onBlur={onBlur} ref={ref} disabled={disabled}>
            <option value="" disabled selected style={{ display: 'none' }}>{placeholder || 'Select Player'} </option>
            {!loading && options?.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
            ))}
        </select>
        </div>
        <span className={style.error_text}>
            { error ? (rules?.required || 'Required') : null}
        </span>
    </div>
    </>
))

export default PlayerSelect
