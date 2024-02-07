import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
