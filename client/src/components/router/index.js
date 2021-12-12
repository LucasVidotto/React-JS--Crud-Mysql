import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Publicar from '../pages/post/index';
import Page from '../pages/public/index';
import Header from '../pages/Header/header';

import Contact from '../../components/pages/contact/contact';

export default function Routers(){
    return(
        <Router>
            <Page />
                <Routes>
                    <Route exact path="/"  component={Page} />
                    <Route  path="/publicacao"  component={Publicar} />
                </Routes>
        </Router>
    );
}
