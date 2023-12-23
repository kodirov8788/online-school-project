// import logo from './logo.svg';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
