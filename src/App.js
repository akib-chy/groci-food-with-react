import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Page/Header/Header";
import Navbar from "./Page/Header/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
