import React from 'react'
import style from '../Styles/styles.module.css'
import B from './B'
import C from './C'
const A = () => {
  return (
    <div className={style.parent__container}>
        <span className={style.parent}>Parent Component : A</span>
        <B/>
        <C/>
    </div>
  )
}

export default A