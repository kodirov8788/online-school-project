// import logo from './logo.svg';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      
    </div>
  );
=======
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Hello World</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
>>>>>>> ed174aa7b36dd8707e056e8ac5c5f3417bae7b62
}

export default App;
