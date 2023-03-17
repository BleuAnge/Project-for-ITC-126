import { navItems } from "./navItems";
import NavDropList from "./NavDropList";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul className="menus">
                {navItems.map((menu, index) => {
                    return <NavDropList items={menu} key={index}/>;
                })}
            </ul>
        </nav>
    )
}

export default Nav