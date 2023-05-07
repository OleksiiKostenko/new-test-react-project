import { useState } from "react";
import css from "./User.module.css";

function User({ followers, avatar, tweets }) {
  const [follow, setFollow] = useState(followers);
  const [btnState, setBtnState] = useState(true);

  const handelClick = () => {
    setBtnState(!btnState);
    btnState ? setFollow(follow + 1) : setFollow(follow - 1);
  };

  return (
    <>
      <div className={css.img_wrapp}>
        <img className={css.img} src={avatar} alt="" />
      </div>
      <ul className={css.text}>
        <li className={css.list_el}>
          <p>{tweets} Tweets</p>
        </li>
        <li className={css.list_el}>
          <p>{follow.toLocaleString("en")} Followers</p>
        </li>
      </ul>
      {btnState ? (
        <button
          style={{
            backgroundColor: "#EBD8FF",
          }}
          className={css.btn}
          type="button"
          onClick={handelClick}
        >
          FOLLOW
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "#5CD3A8",
          }}
          className={css.btn}
          type="button"
          onClick={handelClick}
        >
          FOLLOWING
        </button>
      )}
    </>
  );
}

export default User;
