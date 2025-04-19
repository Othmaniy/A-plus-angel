import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashbard";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          {/* <Route path="/contact" element={<Home />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
