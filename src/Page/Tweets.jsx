import { Link } from "react-router-dom";
import UserCard from "../Component/UserCard/UserCard";
import css from "../Page/Page.module.css";
import { Loading } from "notiflix";
import { useEffect, useState } from "react";

function Tweets() {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    Loading.pulse({
      backgroundColor: "rgb(250,250,250)",
      svgSize: "150px",
      svgColor: "#EBD8FF",
    });
    setTimeout(() => {
      Loading.remove();
    }, 1000);
    setFirstRender(true);
  }, []);

  return (
    firstRender && (
      <main>
        <section className={css.section}>
          <UserCard></UserCard>
          <Link className={css.btn} to="/">
            Home
          </Link>
        </section>
      </main>
    )
  );
}

export default Tweets;
