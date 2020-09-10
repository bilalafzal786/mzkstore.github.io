import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import Upernav from './Upernav';
import Navbar from './Navbar';
import Home from './Home';
import Categories from './Categories';


const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Upernav/>
        <Navbar/>
        <Home/>
        
        <Switch>
            
        <Route exact path='./Home'></Route>
        </Switch>
        </BrowserRouter>
        </>
    )
}
export default App;