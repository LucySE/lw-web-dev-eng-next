import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';
import scLogo from '../../../../public/logos/sc-logo-color.svg';
import appStoreLogo from '../../../../public/logos/app-store.svg';
import googlePlayLogo from '../../../../public/logos/google-play-store.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Image src={scLogo} alt="SafetyCulture Logo" />
        <Image src={appStoreLogo} alt="App Store" />
        <Image src={googlePlayLogo} alt="Google Play" />
      
    </div>
  )
}

export default Footer
