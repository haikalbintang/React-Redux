import Account from "./features/account/Account";
import CarsList from "./features/cars/CarsList";
import Counter from "./features/counters/Counter";
import Ditto from "./features/pokemons/Ditto";

function App() {
  console.log("App.jsx");

  return (
    <>
      <Counter />
      <CarsList />
      <Account />
      <Ditto />
    </>
  );
}

export default App;
