import React from 'react';
import Button from './button';
import { Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <label>SonicHive</label>
                <ul>
                    <li><a>Shop</a></li>
                    <li><a href='#top-products'>Top Products</a></li>
                    <li><a>Shop</a></li>
                </ul>
                <li><a>Message us</a></li>
                <Link to="/login">
                    <Button />
                </Link>
            </nav>
        </div>
    );
}