import React, { useEffect } from 'react'
import style from '../Styles/styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getDatas } from '../Redux/action'
const C = () => {
    const dispatch=useDispatch()
    const names=useSelector((store)=>store)
    const {isError,isLoading,data}=names
    console.log(data)
    useEffect(()=>{
        dispatch(getDatas())
    },[])
  return (
    <div className={style.form__container}>
        {
            data?.map((el,i)=>{
                return(
                <div key={i} className={style.card}>
                    <img src={el.avatar} alt="avatar" className={style.avatar}/>
                    <span>{el.name}</span>
                    
                </div>
                )
            })
        }
    </div>
  )
}

export default C