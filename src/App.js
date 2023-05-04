import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import  Alert  from "./components/Alert";
import NoteState from "./context/notes/NoteState";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { useState } from "react";
import { Usernotes } from "./pages/Usernotes";
import { Footer } from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />

            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              {/* <div className="container"> */}
              <Route exact path="/notes" element={<Usernotes showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
              {/* </div> */}
            </Routes>
          
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}
export default App;
