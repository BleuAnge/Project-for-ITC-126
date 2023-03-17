import './MainMenu.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const MainMenu = () => {
    useEffect(() => {
        const menu = document.getElementById('menu');

        Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });
    }, [])
    

    return (
        <div id="menu">
            <div id="menu-items">
                <Link className="menu-item" to='/'>Home</Link>
                <Link className="menu-item" to='/Shop'>Shop</Link>
                <Link className="menu-item" to='/About'>About Us</Link>
                <Link className="menu-item" to='/ContactScreen'>Contact Us</Link>
            </div>
            <div id="menu-bg-pattern"></div>
            <div id="menu-bg-image"></div> 
        </div>
    )
}

export default MainMenu