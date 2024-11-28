
import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Bisection from './components/Bisection';
import Falseposition from './components/Falseposition';
import Onepoint from './components/onepoint';
import Newton from './components/Newton';
import Graphical from'./components/Graphical';
import Secant from './components/Secant';
import Cramer from './components/Cramer';
import Linear from './components/linear';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <Router>
        <AppHeader/>
        <Routes>
          <Route path = "/" element = {<Home/>}Click = {refreshPage} />
          <Route path = "/components/Bisection" element = {<Bisection/>}/>
          <Route path = "/components/Falseposition" element = {<Falseposition/>}/>
          <Route path = "/components/onepoint" element = {<Onepoint/>}/>
          <Route path = "/components/Newton" element = {<Newton/>}/>
          <Route path = "/components/Graphical" element = {<Graphical/>}/>
          <Route path = "/components/Secant" element = {<Secant/>}/>
          <Route path = "/components/Cramer" element = {<Cramer/>}/>
          <Route path = "/components/linear" element = {<Linear/>}/>

        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
