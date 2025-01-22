// Dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Custom import
import Index from "./Pages/Index.jsx";
import Legals from "./Pages/Legals.jsx";
import AllRooms from "./Pages/AllRooms.jsx";
import AllRoomsPublic from "./Pages/AllRoomsPublic.jsx";

// Feuilles de style
import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="/all-rooms" element={<AllRoomsPublic />} />
          <Route path="/bacchanight" element={<AllRooms />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
