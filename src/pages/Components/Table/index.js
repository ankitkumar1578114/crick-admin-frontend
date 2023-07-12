import styles from './styles.module.css'
const Table = ({ columns, data }) => {
  return <>
        <table className={styles.table}>
            <tr className={styles.tr}>
                {
                    columns?.map((column) => (
                        <th className={styles.th} key={column?.key}>{column?.header}</th>
                    ))
                }
            </tr>
            {
                data?.map((item, index) => (
                    <tr className={styles.tr} key={index}>
                        {
                            columns?.map((column, index) => (
                                <td className={styles.td} key={index}>
                                    {
                                        (typeof (column?.accessor) === 'string')
                                          ? item[column?.accessor]
                                          : column?.accessor(item)
                                    }
                                </td>
                            ))
                        }
                    </tr>
                )
                )
            }

        </table>
    </>
}
export default Table
