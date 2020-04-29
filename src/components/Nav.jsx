import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/PageDepartement">PageDepartement</Link>
                    </li>
                    <li>
                        <Link to="/PageOeuvreArm">PageOeuvreArm</Link>
                    </li>
                    <li>
                        <Link to="/PageOeuvreAsia">PageOeuvreAsia</Link>
                    </li>
                    <li>
                        <Link to="/PageOeuvrePainting">PageOeuvrePainting</Link>
                    </li>
                    <li>
                        <Link to="/PageOeuvreInstrument">PageOeuvreInstrument</Link>
                    </li>

                </ul>
            </nav>

        </>

    );
}

export default Nav;