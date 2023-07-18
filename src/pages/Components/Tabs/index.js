import styles from './styles.module.css'
const Tabs = ({ tabs = [], onChange, active, children }) => {
  return <>
          <div className={styles.tabs}>
           {tabs?.map((tab, index) => (
                <div key={index} onClick={() => (active !== index) && onChange(index)} className={active === index ? styles.selected_tab : styles?.not_selected_tab}>
                    {tab}
                </div>
           ))
        }
        </div>
        <div className={styles.squads}>
            {children}
        </div>
        </>
}
export default Tabs
