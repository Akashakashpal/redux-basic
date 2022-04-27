import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Hello from "./Hello";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "Getcount", length: data.length });
  };

  const resetUser = () => {
    dispatch({ type: "ResetCount" });
  };

  return (
    <div className="App">
      <Hello />
      <h1>Redux basic Example</h1>
      <h3>{count}</h3>
      <div>
        <button onClick={getUser}>Get User Count</button>
        <button onClick={resetUser}>Reset Count</button>
      </div>
    </div>
  );
}

export default App;
