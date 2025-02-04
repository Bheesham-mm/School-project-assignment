import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js'
import Home from './pages/Home.js';
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;