import './MainMenu.css';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div id="menu">
            <div id="menu-items">
                <Link className="menu-item" id='menu-item1' to='/'>Home</Link>
                <Link className="menu-item" id='menu-item2' to='/Shop'>Shop</Link>
                <Link className="menu-item" id='menu-item3' to='/About'>About Us</Link>
                <Link className="menu-item" id='menu-item4' to='/ContactScreen'>Contact Us</Link>
            </div>
            <div id="menu-bg-pattern"></div>
            <div id="menu-bg-image"></div> 
        </div>
    )
}

export default MainMenu