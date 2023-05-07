import UserCard from "../UserCard/UserCard";
import css from "./App.module.css";
function App() {
  return (
    <main>
      <section className={css.section}>
        <UserCard></UserCard>
      </section>
    </main>
  );
}

export default App;
