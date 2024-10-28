import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increaseStep,
  decreaseStep,
} from "./counterSlice";

function Counter() {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(increment(step));
  }

  function handleSubstract() {
    dispatch(decrement(step));
  }

  function handleIncreaseStep() {
    dispatch(increaseStep(1));
  }

  function handleDecreaseStep() {
    dispatch(decreaseStep(1));
  }

  return (
    <header className="flex flex-col p-6 justify-center items-center gap-8">
      <div className="flex justify-center items-center gap-4">
        <h1 className="font-bold text-5xl">
          Welcome, Team <span className="text-yellow-500">{count}</span>
        </h1>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-center bg-gray-300 text-4xl h-10 w-10 pb-3 pt-1 px-2 font-bold"
            onClick={handleAdd}
          >
            +
          </button>
          <button
            className="flex items-center justify-center bg-gray-300 text-4xl h-10 w-10 pb-3 pt-1 px-2 font-bold"
            onClick={handleSubstract}
          >
            -
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="flex items-center justify-center bg-gray-300 text-4xl h-10 w-10 pb-3 pt-1 px-2 font-bold"
          onClick={handleDecreaseStep}
        >
          -
        </button>
        <p className="font-bold text-4xl text-yellow-600">{step}</p>
        <button
          className="flex items-center justify-center bg-gray-300 text-4xl h-10 w-10 pb-3 pt-1 px-2 font-bold"
          onClick={handleIncreaseStep}
        >
          +
        </button>
      </div>
    </header>
  );
}

export default Counter;
