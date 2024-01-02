import From from '../Form'
import styles from './style.module.css'
import { useState } from 'react'
import DataContext from '../../context/DataContext.jsx';

export default function UserForm({ setUsers }) {
    const initialState = localStorage.user ? JSON.parse(localStorage.user) : { First_Name: '', Last_Name: '', Email: '', Password: '' }
    const [formState, setFormState] = useState(initialState)
    const [errorState, setErrorState] = useState({ First_Name: '', Last_Name: '', Email: '', Password: '' })
    const [errorSubmit, setErrorSubmit] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorSubmit(false)
        if (!Object.values(errorState).join('')) {
            if (Object.values(formState).filter(e => e.length < 1).length < 1) {
                setErrorSubmit(true)
                setUsers(old => [...old, formState])
                setFormState({ First_Name: '', Last_Name: '', Email: '', Password: '' })
                localStorage.clear()
            }
        }
    }
    return <DataContext.Provider value={{ formState, setFormState, errorState, setErrorState }}>
        <div className={styles.UserForm}>
            <h1>Add new User</h1>
            <div className={styles.titel}></div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <From typeName={'First_Name'} typeInput={'text'} />
                <From typeName={'Last_Name'} typeInput={'text'} />
                <From typeName={'Email'} typeInput={'text'} />
                <From typeName={'Password'} typeInput={'Password'} />
                <button className={styles.submit} type='submit'>Submit</button>
                <div className={`${styles.error} ${errorSubmit == false ? styles.vis : null}`}>The fields are not filled in correctly, the form cannot be submitted</div>
            </form>
        </div>
    </DataContext.Provider>
}
