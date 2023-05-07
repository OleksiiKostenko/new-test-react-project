import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../service/getQuery";
import User from "../User/User";
import css from "./UserCard.module.css";

function UserCard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page).then((data) => setUsers((prev) => [...prev, ...data]));
  }, [page]);

  const handelClick = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      {users?.map(({ followers, id, avatar, tweets, following }) => (
        <div key={id} className={css.card}>
          <div className={css.bgi_wrapp}>
            <img className={css.logo} src="../src/assets/logo.png" alt="Logo" />
            <div className={css.border_bottom}></div>
          </div>
          <div className={css.user_wrapp}>
            <User
              followers={followers}
              avatar={avatar}
              following={following}
              tweets={tweets}
            ></User>
          </div>
        </div>
      ))}
      <button type="button" onClick={handelClick}>
        Load More
      </button>
    </>
  );
}

export default UserCard;
