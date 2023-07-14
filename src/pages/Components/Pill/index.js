import styles from './styles.module.css'
const Pill = ({ content, color = 'green', textColor = 'white', type = 'primary' }) => {
  return (<>
    <div className={
      {
        primary: styles.primary,
        secondary: styles.secondary,
        tertiary: styles.tertiary,
        transparent: styles.transparent
      }[type]

    } >
        {content}
    </div>
    </>)
}

export default Pill
