import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import IdCard from "./pages/IdCard/IdCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/idcard/:person" element={<IdCard />} />
      </Routes>

      {/* <Login /> */}
      {/* <Search /> */}
      {/* <IdCard
        title="Manidhar Profile"
        person={{ name: "Manidhar", img: "MS" }}
      /> */}
    </Router>
  );
}

export default App;
