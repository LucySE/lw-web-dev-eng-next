import React from 'react'
import Image from 'next/image'
import scLogo from '../../../../public/logos/sc-logo-color.svg'
import styles from './NavBar.module.css'



const NavBar = () => {
  return (
   <>
   <div className={styles.navbar}>
   <Image src={scLogo} alt="SafetyCulture Logo"/>
   </div>
    </>

    )
}

export default NavBar

