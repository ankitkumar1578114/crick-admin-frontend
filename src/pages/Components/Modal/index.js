import styles from './styles.module.css'
const Modal = (props) => {
  const { show, setShow, size = 'lg' } = props
  return <>
        <div id="outside_click" className={show ? styles.modal_parent : styles.hide_modal_parent} onClick={(e) => { if (e.target.id === 'outside_click') setShow(false) }}>
            <div className={ styles.show_modal} style={{
              lg: { width: '90%' },
              md: { width: '50%' }
            }[size]}>
                {props.children}
            </div>
        </div>
    </>
}
export default Modal
