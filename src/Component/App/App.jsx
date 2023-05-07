import { Toaster } from "react-hot-toast";
import UserCard from "../UserCard/UserCard";
import css from "./App.module.css";
function App() {
  return (
    <main>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <section className={css.section}>
        <UserCard></UserCard>
      </section>
    </main>
  );
}

export default App;
