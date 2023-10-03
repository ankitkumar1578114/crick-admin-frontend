import IconScreen from '../Components/Icons/IconScreen'
import styles from './styles.module.css'
const Welcome = () => {
  const galaryImages = [
    {
      text: 'Series',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/46b97f83-3fff-43d4-b797-1a2ac5159eda'
    },
    {
      text: 'Venue',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/c3bf0cd5-bd6b-446b-8fd8-bb8c7c818032'
    },

    {
      text: 'Match',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/ecbc84fa-1501-49a2-a478-79eac73f5acf'
    },
    {
      text: 'Team',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/bfaf60c4-b7e1-491f-ab31-207d114297b6'
    },
    {
      text: 'Player',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/8e5bc310-1d4e-4b83-adb6-a7ba8d77892d'
    },
    {
      text: 'Match (Starting)',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/4f3442ba-cc31-4da0-bb64-13f8b9a5fead'
    },
    {
      text: 'Match (Running)',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/8c671bbf-0666-4c4a-91d2-797ffd55ad94'
    },
    {
      text: 'Match (Running)',
      url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/57b6e452-665e-4e22-8941-3fd328691bbd'
    }
  ]
  return <>
      <div className = {styles.parent}>
        <div className={styles.flex}>
            <div className={styles.welcome_text}>
              <div>
                <h1 className={styles.h1}>WELCOME !</h1>
                <h4 className={styles.h4}>WHY WASTING TIME ON PEN & PAPER ?<br/>
                    TIME TO BE DIGITAL
                </h4>

              </div>
            </div>
            <div className={styles.center}>
              <IconScreen />
            </div>
        </div>
      </div>
      <div className={styles.how_does_it_work}>
        <h2>How Does It Work ?</h2>
        <div className={styles.galary}>
            {
              galaryImages?.map((image) => (
                <div key={image?.url}>
                  <img src ={image?.url} style={{ width: '100%' }}/>
                  {image?.text}
                </div>
              ))
            }
        </div>
      </div>
    </>
}
export default Welcome
