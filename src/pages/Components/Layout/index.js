import React from 'react'
import Button from '../Button'
import Input from '../Input'
import PlayerSelect from '../PlayerSelect'
import TeamSelect from '../TeamSelect'
import VenueSelect from '../VenueSelect'
import style from './styles.module.css'
import SeriesSelect from '../SeriesSelect'
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
      <div><input type='datetime-local' className={style.input} {...register(_key, { required })} /></div>
      </div>
    </>
  )
  const DateTimeLocal = ({ label, _key, register, required }) => (
    <>
    <div>
          <div><label className={style.label}>{label}</label></div>
      <div><input type='datetime-local' className={style.input} {...register(_key, { required })} /></div>
      </div>
    </>
  )

  return (<>
        <div className={style.form}>
        {
          controls.map((control) => {
            const { label, key, options, type, loading, disabled } = control
            if (type === 'text') { return (<><Input label={label} _key={key} register={register} required /></>) }
            if (type === 'select') { return (<> <Select label={label} {...register(key)} options={options} /></>) }
            if (type === 'player-select') { return (<> <PlayerSelect label={label} {...register(key)} options={options} loading={loading} disabled={disabled}/></>) }
            if (type === 'team-select') { return (<> <TeamSelect label={label} {...register(key)} options={options} loading={loading}/></>) }
            if (type === 'venue-select') { return (<> <VenueSelect label={label} {...register(key)} options={options} loading={loading}/></>) }
            if (type === 'series-select') { return (<> <SeriesSelect label={label} {...register(key)} options={options} loading={loading}/></>) }
            if (type === 'date') { return (<><Date label={label} _key={key} register={register} required /></>) }
            if (type === 'datetime') { return (<><DateTimeLocal label={label} _key={key} register={register} required /></>) }
            return null
          })
        }
        <div>
          <Button type="submit" onClick={handleSubmit(onSubmit)} value="Submit"/>
        </div>
        </div>
    </>)
}

export default Layout
