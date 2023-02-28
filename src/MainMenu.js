import './MainMenu.css';

const MainMenu = () => {
    return (
        <div id="menu">
            <div id="menu-items">
                <a href="/" className="menu-item" id='menu-item1'>Home</a>
                <a href="/" className="menu-item" id='menu-item2'>Shop</a>
                <a href="/" className="menu-item" id='menu-item3'>About Us</a>
                <a href="/" className="menu-item" id='menu-item4'>Contact Us</a>
            </div>
            <div id="menu-bg-pattern"></div>
            <div id="menu-bg-image"></div>
        </div>
    )
}

export default MainMenu