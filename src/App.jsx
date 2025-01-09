// Dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Custom import
import Index from "./Pages/Index.jsx";
import Legal from "./Pages/Legal.jsx";
import AllRooms from "./Pages/AllRooms.jsx";

// Feuilles de style
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/les-salles" element={<AllRooms />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
