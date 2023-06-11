import React, { useState } from "react";
import style from "../Styles/styles.module.css";
import { useDispatch } from "react-redux";
import { addDetails } from "../Redux/action";

const B = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDetails({
        name: name,
        avatar: avatar,
      })
     
    );
    setName("")
    setAvatar("")
  };
  // console.log("text-", name);
  return (
    <div className={style.form__container}>
      <form onSubmit={handleSubmit}>
        <span>child component: B</span>
        <input
          type="text"
          placeholder="Add hero names"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required="required"
        />
        <input
          type="text"
          placeholder="Add hero avatar link"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default B;
