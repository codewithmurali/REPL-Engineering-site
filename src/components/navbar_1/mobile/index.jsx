import React from 'react'

import styles from "./style.module.css"

 

export const MobileNavbar = () => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.logoTopMenu}>
 
        <div>
            x
        </div>
      </div>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>HOME</div>
        <div className={styles.menuItem}>PROFILE</div>
        <div className={styles.menuItem}>PRODUCTS</div>
        <div className={styles.menuItem}>CLIENTS</div>
        <div className={styles.menuItem}>QUALITY</div>
        <div className={styles.menuItem}>CAREERS</div>
        <div className={`${styles.menuItem} ${styles.lastMenuItem}`}>
          CONTACT US
        </div>
      </div>
    </div>
  )
}
