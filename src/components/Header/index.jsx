import styles from './style.module.css'
export default function Header() {
  return <header className={styles.header}>
    Users
    <i className="fa-solid fa-user-secret"></i>
    </header>
}
