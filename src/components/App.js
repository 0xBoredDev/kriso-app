import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Keychains from "./home/Keychains";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route exact path="/home/Keychains" element={<Keychains />} />
      <Route element={<ToastContainer autoClose={3000} hideProgressBar />} />
    </Routes>
  );
}

export default App;
