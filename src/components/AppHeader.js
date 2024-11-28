import { NavLink as Link } from 'react-router-dom';
import './AppHeader.css'
function AppHeader() {
    return (
        <header className="App-header">
        <img className="App-header-logo" src="/image/logo.png"/>
        <Link to = "/" className = "App-header-Home">
        <h3>HomePage</h3>
        </Link>
      </header>
    );
}

export default AppHeader;