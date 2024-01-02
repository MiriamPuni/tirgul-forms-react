import { useState , useEffect} from 'react'
import UserForm from '../UserForm'
import UserTable from '../UserTable'
import styles from './style.module.css'
export default function Main() {
    const [users, setUsers] = useState([
        {
            "first_name": "Avi",
            "last_name": "Levi",
            "email": "avi@example.com"
        },
        {
            "first_name": "Shira",
            "last_name": "Cohen",
            "email": "shira@example.com"
        },
        {
            "first_name": "Yossi",
            "last_name": "Cohen",
            "email": "yossi@example.com"
        }
    ])
  return <div className={styles.main}>
    <UserForm setUsers = {setUsers}/>
    <UserTable users = {users}/>
    </div>
}
