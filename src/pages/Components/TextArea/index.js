import styles from './styles.module.css'
const TextArea = ({ height }) => {
  return <>

        <textarea style={{ height: height + 'px' }} className={styles.text_area}>

        </textarea>
    </>
}
export default TextArea
