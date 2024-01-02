import styles from './style.module.css'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
export default function From({ typeName, typeInput }) {
    const { formState, setFormState, errorState, setErrorState } = useContext(DataContext)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify({ ...newData, Password: '' })
            return newData
        })
        setErrorState(old => ({ ...old, [typeName]: '' }))
        if (typeName == 'First_Name' || typeName == 'Last_Name') {
            if (value.split('').filter(e => !isNaN(e)).length > 0) {
                setErrorState(old => ({ ...old, [typeName]: 'Name should consist of letters only' }))
            }
        }
        if (typeName == 'Email') {
            if (!value.includes('@')) {
                setErrorState(old => ({ ...old, [typeName]: 'The email should have the @ sign' }))
            }
        }
        if (typeName == 'Password') {
            if (value.length < 5 || value.split('').filter(e => !isNaN(e)).length < 1 || value.split('').filter(e => isNaN(e)).length < 1) {
                setErrorState(old => ({ ...old, [typeName]: 'The password should be at least 5 characters long, and include both letters and numbers' }))
            }
        }

    }
    return <label className={styles.form}>
        {typeName.replace('_', ' ')}:
        <input className={styles.input} onChange={handleChange} value={formState[typeName]} type={typeInput} name={typeName} />
        <div className={`${styles.error} ${errorState[typeName] == '' ? '' : styles.vis}`}>{errorState[typeName]}</div>
    </label>
}
