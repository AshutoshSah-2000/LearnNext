import React from 'react'
import NavBar from './Navbar'
import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
    return (
        <div className={styles.main}>
            <NavBar></NavBar>
            { children }
        </div>
    )
}
