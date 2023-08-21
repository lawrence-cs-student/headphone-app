import React from "react";
import { Route, Routes} from 'react-router-dom';
import Site from './site';
import Login from './login';


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Site/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
  
}