import { useState } from 'react';
import DropDown from "./DropDown";

const NavDropList = ({ items }) => {
    const [dropdown, setDropDown] = useState(false);

    return (
        <li className="nav-items">
            {items.subMenu ? (
                <>
                    <button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropDown((prev) => !prev)}>
                        {items.title}{" "}
                    </button>
                    <DropDown submenus={items.subMenu} dropdown={dropdown}/>
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    )
}

export default NavDropList