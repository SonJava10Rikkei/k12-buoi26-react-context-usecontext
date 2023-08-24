import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts";
import Bai1 from "./components/bai1/bai1";
import Bai2 from "./components/bai2/bai2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="bai1" element={<Bai1 />}></Route>
          <Route path="bai2" element={<Bai2 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
