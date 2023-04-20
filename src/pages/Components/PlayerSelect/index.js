import React from 'react'
import style from '../Layout/styles.module.css'
// eslint-disable-next-line react/display-name
const PlayerSelect = React.forwardRef(({ onChange, onBlur, name, label, options, loading }, ref) => (
    <>
    <div>
        <div>
        <label className={style.label}>{label}</label>
        </div>
        <div>
        <select className ={style.input} ref={ref} name={name} onChange={onChange} onBlur={onBlur}>{loading}
            {!loading && options?.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
            ))}
        </select>

        </div>

    </div>
    </>
))

export default PlayerSelect
