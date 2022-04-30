import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Page/404Page/404Page";
import Blogs from "./Page/Blogs/Blogs";
import Header from "./Page/Header/Header";
import Login from "./Page/UserForm/Login/Login";
import Register from "./Page/UserForm/Register/Register";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
