import classes from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <div className={classes["App"]}>
      {/* Header: Logo and User information/profile */}
      <Header />
      {/* Main: Component with navigation and various pages  */}
      <Main />
    </div>
  );
}

export default App;
