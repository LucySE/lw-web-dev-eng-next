'use client';
import React from 'react'
import styles from './ActionButton.module.css'

const ActionButton = () => {
  return (
    <div >
      <button className={styles.ActionButton} onClick={() => alert('Button clicked!')}>Actions</button>
   </div>
  )
}

export default ActionButton
