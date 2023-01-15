import React from 'react'
import styles from '../Warning/style.module.scss'
import Image from 'next/image'
import warning from '../../../public/images/warning.png'
const Warning = () => {
  return (
   <section className={styles.container}>
    <div className={styles.image}>
        <Image src={warning} width={150}  alt='imagem' style={{objectFit:'contain'}}/>
    </div>
    <div className={styles.text}>
        <h5>Para uma melhor visualização:</h5>
        <span>1- matrículas, utilize o formato <strong>003</strong>;</span>
        <span>2- datas, separe por mês e ano por <strong>-</strong> e utilize o formato <strong>2022-01</strong>;</span>
        <span>3- valores, separe por <strong>.</strong> e utilize o formato <strong>1000.0</strong>;</span>
        <span>4- situação, utilize o formato <strong>pago</strong> ou <strong>aberto</strong> ;</span>
        
    </div>
   </section>
  )
}

export default Warning;
