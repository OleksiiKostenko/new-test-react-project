import { useEffect } from 'react';
import css from '../Page/Page.module.css';

function Home() {
  useEffect(() => {
    scroll({ top, behavior: 'smooth' });
  }, []);

  return (
    <section className={css.section}>
      <div className={css.wrapp_title}>
        <h1 className={css.title}>All your favorite Tweets in one place</h1>
      </div>
    </section>
  );
}

export default Home;
