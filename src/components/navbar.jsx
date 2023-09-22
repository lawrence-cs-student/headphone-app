import React, {useState} from 'react';
import Button from './button';
import { Link} from 'react-router-dom';



export default function Navbar() {


    return (
        <div>
            <nav >
                <label>SonicHive</label>
                <ul>
                    <li><a>Contacts</a></li>
                    <li><a href="#top-products">Top Products</a></li>
                </ul>
                <Link to="/login">
                    <Button/>
                </Link>
            </nav>
        </div>
    );
}