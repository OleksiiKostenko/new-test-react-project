import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import css from "../Layout/Layout.module.css";

function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.nav_link} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav_link} to="/tweets">
            Tweets
          </NavLink>
        </nav>
      </header>

      <main className={css.main}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}></footer>
    </>
  );
}

export default Layout;
