import classes from "./App.module.css";
import CandyList from "./Components/CandyList/CandyList";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Form />
        <CandyList/>
      </main>
    </div>
  );
};

export default App;
