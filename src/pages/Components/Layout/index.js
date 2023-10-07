import React from 'react'
import Button from '../Button'
import Input from '../Input'
import PlayerSelect from '../PlayerSelect'
import TeamSelect from '../TeamSelect'
import VenueSelect from '../VenueSelect'
import style from './styles.module.css'
import SeriesSelect from '../SeriesSelect'
const Layout = ({ handleSubmit, register, onSubmit, controls, submitBtnName = 'Submit', errors }) => {
  // eslint-disable-next-line react/display-name

  // eslint-disable-next-line react/display-name
  const Select = React.forwardRef(({ onChange, onBlur, name, label, options, placeholder, loading, disabled, error, rules }, ref) => (
    <>
    <div>
        <div>
        <label className={style.label}>{label}</label>
        </div>
        <div>
        <select className ={style.input} name={name} onChange={onChange} onBlur={onBlur} ref={ref} disabled={disabled} placeholder={placeholder}>
            {!loading && options?.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
        <span className={style.error_text}>
            { error ? (rules?.required || 'Required') : null}
        </span>
    </div>
    </>
  ))

  const Date = ({ label, _key, register, required, error, rules }) => (
    <>
    <div>
          <div><label className={style.label}>{label}</label></div>
      <div><input type='date' className={style.input} {...register(_key, { required })} /></div>
      <span className={style.error_text}>
            { error ? (rules?.required || 'Required') : null}
        </span>
      </div>
    </>
  )
  const DateTimeLocal = ({ label, _key, register, required, error, rules }) => (
    <>
    <div>
          <div><label className={style.label}>{label}</label></div>
          <div><input type='datetime-local' className={style.normal_input} {...register(_key, { required })} /></div>
          <span className={style.error_text}>
            { error ? (rules?.required || 'Required') : null}
        </span>

      </div>
    </>
  )

  return (<>
        <div className={style.form}>
        {
          controls.map((control) => {
            const { label, key, options, type, loading, disabled, placeholder = '', rules } = control
            if (type === 'text') { return (<><Input label={label} _key={key} register={register} error={errors?.[key]} rules={rules} placeholder={placeholder}/></>) }
            if (type === 'select') { return (<> <Select label={label} {...register(key, { required: rules?.required })} options={options} placeholder={placeholder} loading={loading} disabled={disabled} error={errors?.[key]} rules={rules}/></>) }
            if (type === 'player-select') { return (<> <PlayerSelect label={label} {...register(key, { required: rules?.required })} options={options} placeholder={placeholder} loading={loading} disabled={disabled} error={errors?.[key]} rules={rules}/></>) }
            if (type === 'team-select') { return (<> <TeamSelect label={label} {...register(key, { required: rules?.required })} options={options} placeholder={placeholder} loading={loading} disabled={disabled} error={errors?.[key]} rules={rules}/></>) }
            if (type === 'venue-select') { return (<> <VenueSelect label={label} {...register(key, { required: rules?.required })} options={options} placeholder={placeholder} loading={loading} disabled={disabled} error={errors?.[key]} rules={rules}/></>) }
            if (type === 'series-select') { return (<> <SeriesSelect label={label} {...register(key, { required: rules?.required })} options={options} placeholder={placeholder} loading={loading} disabled={disabled} error={errors?.[key]} rules={rules}/></>) }
            if (type === 'date') { return (<><Date label={label} _key={key} register={register} required={control?.rules?.required} rules={rules} error={errors?.[key]} disabled={disabled} /></>) }
            if (type === 'datetime') { return (<><DateTimeLocal label={label} _key={key} register={register} disabled={disabled} required={control?.rules?.required} rules={rules} error={errors?.[key]} /></>) }
            return null
          })
        }
        <div>
          <div className={style.label}>
              &nbsp;
          </div>
          <div className={style.submit}>
            <Button type="submit" onClick={handleSubmit(onSubmit)} value={submitBtnName}/>
          </div>
        </div>
        </div>
    </>)
}

export default Layout
