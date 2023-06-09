import { Link } from 'react-router-dom';
import UserCard from '../Component/UserCard/UserCard';
import css from '../Page/Page.module.css';

import { useEffect, useState } from 'react';
import Loader from '../Component/Loader/Loader';

function Tweets() {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    scroll({ top, behavior: 'smooth' });
    setTimeout(() => {
      setFirstRender(true);
    }, 700);
  }, []);

  return !firstRender ? (
    <Loader></Loader>
  ) : (
    <section className={css.section}>
      <UserCard></UserCard>
      <Link className={css.btn} to="/">
        Home
      </Link>
    </section>
  );
}

export default Tweets;
