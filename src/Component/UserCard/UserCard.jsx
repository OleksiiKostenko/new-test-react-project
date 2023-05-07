import User from "../User/User";
import css from "./UserCard.module.css";

const userData = [
  {
    user: "Brennon.Walsh",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg",
    tweets: 10,
    followers: 9109,
    id: "1",
  },
  {
    user: "Calista_Harber61",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg",
    tweets: 28,
    followers: 30060,
    id: "2",
  },
  {
    user: "Gino_Gerhold61",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
    tweets: 94,
    followers: 4240,
    id: "3",
  },
];

function UserCard() {
  const user = userData;
  return (
    <>
      {user.map(({ followers, id, avatar, tweets }) => (
        <div key={id} className={css.card}>
          <div className={css.bgi_wrapp}>
            <img className={css.logo} src="/src/assets/Logo.png" alt="Logo" />
            <div className={css.border_bottom}></div>
          </div>
          <div className={css.user_wrapp}>
            <User followers={followers} avatar={avatar} tweets={tweets}></User>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCard;
