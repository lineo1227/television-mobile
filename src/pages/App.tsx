import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useStore from "../stores";
import { Button } from "antd-mobile";
function App() {
    const { count, increment, decrement } = useStore();
    return (
        <>
            <div>
                <a href="#">
                    <img onClick={increment} src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="#">
                    <img onClick={decrement} src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button color="primary" onClick={increment}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
