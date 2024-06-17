import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';
import scLogo from '../../../../public/logos/sc-logo-color.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Image src={scLogo} alt="SafetyCulture Logo"/>
      
    </div>
  )
}

export default Footer
