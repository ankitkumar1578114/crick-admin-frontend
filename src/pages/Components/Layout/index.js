import React from 'react'
import Input from '../Input'
import PlayerSelect from '../PlayerSelect'
import TeamSelect from '../TeamSelect'
import VenueSelect from '../VenueSelect'
import style from './styles.module.css'
const Layout = ({ handleSubmit, register, onSubmit, controls }) => {
  // eslint-disable-next-line react/display-name

  // eslint-disable-next-line react/display-name
  const Select = React.forwardRef(({ onChange, onBlur, name, label, options }, ref) => (
          <>
            <label className={style.label}>{label}</label>
            <select className ={style.input} ref={ref} name={name} onChange={onChange} onBlur={onBlur}>
                {options?.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
          </>
  ))
  const Date = ({ label, _key, register, required }) => (
    <>
    <div>
          <div><label className={style.label}>{label}</label></div>
      <div><input type='date' className={style.input} {...register(_key, { required })} /></div>
      </div>
    </>
  )

  return (<>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form}>
        {
          controls.map((control) => {
            if (control.type === 'text') { return (<><Input label={control.label} _key={control.key} register={register} required /></>) }
            if (control.type === 'select') { return (<> <Select label={control.label} {...register(control.key)} options={control.options} /></>) }
            if (control.type === 'player-select') { return (<> <PlayerSelect label={control.label} {...register(control.key)} options={control.options} loading={control.loading} disabled={control.disabled}/></>) }
            if (control.type === 'team-select') { return (<> <TeamSelect label={control.label} {...register(control.key)} options={control.options} loading={control.loading}/></>) }
            if (control.type === 'venue-select') { return (<> <VenueSelect label={control.label} {...register(control.key)} options={control.options} loading={control.loading}/></>) }
            if (control.type === 'date') { return (<><Date label={control.label} s_key={control.key} register={register} required /></>) }
            return null
          })
        }
        <div>
          <input type="submit" value="Add" className={style.submit}/>
        </div>
        </div>
    </form>
    </>)
}

export default Layout
