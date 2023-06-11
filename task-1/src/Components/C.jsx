import React, { useEffect } from "react";
import style from "../Styles/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDatas } from "../Redux/action";

const C = () => {
  const dispatch = useDispatch();
  const names = useSelector((store) => store);
  const { isError, isLoading, data } = names;
  console.log(data);
  useEffect(() => {
    dispatch(getDatas());
  }, []);

  const handleDelete=(id)=>{
    // console.log("id",id)
    dispatch(deleteDetails(id))
  }
  return (
    <div className={style.form__container}>
      <span>child component: C</span>
      {isLoading ? (
        <h1>Loading ... </h1>
      ) : (
        data?.map((el, i) => {
          return (
            <div key={i} className={style.card}>
              <img src={el.avatar} alt="avatar" className={style.avatar} />
              <span className={style.heroName}>{el.name}</span>
              {/* <button onClick={()=>handleDelete(el.id)} className={style.delBtn}>Delete</button> */}
              <button className={style.delbtn} role="button" onClick={()=>handleDelete(el.id)}><span class="text">Delete</span><span>will Remove</span></button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default C;
