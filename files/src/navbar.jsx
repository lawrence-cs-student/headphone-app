import React, {useState} from 'react';
import Button from './button';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    
    const [isMobile, setIsMobile] = useState(false);


    return (
        <div>
            <nav >
                <label>SonicHive</label>
                <ul className={isMobile? "nav-links-mobile" : "nav-links" }
                    onClick={() => setIsMobile(false)}
                >
                    <li><a>About</a></li>
                    <li><a href='#top-products'>Top Products</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Message us</a></li>
                </ul>
                <Link to="/login">
                    <Button/>
                </Link>
                <button className="mobile-menu" 
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </nav>
            
        </div>
    );
}