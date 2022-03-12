import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckpointJsx from '../pages/CheckpointJsx';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Vente from '../pages/Vente';

const Links = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={< Home/>}/>
                <Route path='/vente' element={< Vente />}/>
                <Route path='/contact' element={< Contact />}/>
                <Route path='/checkpoint-jsx' element={< CheckpointJsx />}/>
            </Routes>
        </div>
    );
};

export default Links;