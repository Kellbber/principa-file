import React from 'react'
import styles from '../Header/styles.module.scss'
import Image from 'next/image'
import Principia from '../../../public/images/principia.svg'
import Logo from '../../../public/images/logo.svg'
const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.principia}>
      <Image src={Principia} width={220} height={100} style={{objectFit:"contain"}} alt="princípia"/>
      </div>
      <div className={styles.logo}>
      <Image src={Logo} width={130} height={100} style={{objectFit:"contain"}} alt="logo princípia"/>
      </div>
    </section>
  )
}

export default Header;