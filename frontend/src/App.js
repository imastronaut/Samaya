import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
