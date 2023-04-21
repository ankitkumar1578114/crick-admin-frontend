import style from './styles.module.css'
const Pill = ({ content, color = 'green', textColor = 'white' }) => {
  const colors = {
    green: 'rgb(55, 165, 0)',
    red: 'rgb(255, 94, 94)',
    gray: 'rgb(200, 200, 200)',
    transparent: 'rgba(0,0,0,0)'
  }
  return (<>
    <div className={style.pill} style={{ backgroundColor: colors[color], color: textColor }}>
        {content}
    </div>
    </>)
}

export default Pill
