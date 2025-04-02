import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type //ye same bhi rakh sakte hai 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343e4f";
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success")

    }

  }
  return (
    <>
      <Router>
            <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
              <Route path="About" element={<About mode={mode}/>}/>
              <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
            </Routes>
            <Footer mode={mode}/>
      </Router>

        </>
        );
}

        export default App;

