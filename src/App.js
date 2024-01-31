import './App.css';
import Navbar2 from './components/Navbar2';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import Neighborhoods from './pages/Neigborhoods';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar2/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/neigborhoods" element={<Neighborhoods/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes> 
      </Router>
    </div>
  );
}
export default App;
