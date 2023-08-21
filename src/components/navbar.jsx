import React, {useState} from 'react';
import Button from './button';
import { Link} from 'react-router-dom';



export default function Navbar() {


    return (
        <div>
            <nav >
                <label>SonicHive</label>
                <li><a>Contacts</a></li>
                <Link to="/login">
                    <Button/>
                </Link>
            </nav>
        </div>
    );
}