import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Page/Header/Header";
import Navbar from "./Page/Header/Shared/Navbar/Navbar";
import Login from "./Page/UserForm/Login/Login";
import Register from "./Page/UserForm/Register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
