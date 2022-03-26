import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../component/profil/Profile';
import CheckpointJsx from '../pages/CheckpointJsx';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Vente from '../pages/Vente';
import "../style.css";
const Links = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={< Home/>}/>
                <Route path='/vente' element={< Vente />}/>
                <Route path='/contact' element={< Contact />}/>
                <Route path='/checkpoint-jsx' element={< CheckpointJsx />}/>
                <Route path='/profil' element={< Profile />}/>
            </Routes>
        </div>
    );
};

export default Links;