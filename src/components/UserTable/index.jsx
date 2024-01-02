import styles from './style.module.css'
export default function UserTable({ users }) {
    return <div className={styles.UserTable}>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((e, i) => {
                    return <tr >
                        <td >{i+1}</td>
                        {Object.values(e).map((t,i) => {
                            if (i < 3){
                                return <td className={styles.td}>{t}</td>
                            }
                        })}
                        
                    </tr>
                })}

            </tbody>
        </table>
    </div>
}
