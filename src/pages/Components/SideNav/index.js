import { useState } from 'react'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'
const SideNav = () => {
  const options = [
    {
      key: '/series',
      label: 'Series'
    },
    {
      key: '/match',
      label: 'Match'
    },
    {
      key: '/team',
      label: 'Team'
    },
    {
      key: '/player',
      label: 'Player'
    }, {
      key: '/venue',
      label: 'Venue'
    }
  ]
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location?.pathname)
  return <>
  <div className={styles.parent}>
  {
        options?.map((option) => (
            <Link to={option?.key} key={option?.key} className={activeTab === option?.key ? styles.selected_item : styles.not_selected_item}
            onClick={() => setActiveTab(option?.key)}

            >
                {option?.label}
            </Link>

        ))
    }

  </div>
    </>
}
export default SideNav
