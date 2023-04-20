import style from './styles.module.css'
const Score = ({ score, loadingScore }) => {
  return (<>
        <div className={style.balls}>
        {
            !loadingScore && (score?.map((ball, index) => (<div key={index}>{ball?.result}</div>)))
        }
        </div>

    </>)
}

export default Score
