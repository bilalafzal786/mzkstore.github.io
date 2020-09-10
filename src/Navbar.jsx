import React from 'react';
import Upernav from './Upernav';
import search from './images/surface1.svg';

const Navbar = () => {
    return (
        <>
            <section id="LowerNav" className='text-white'>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className=" col-lg-10 col-6 mx-auto my-2">
                        <nav className="navbar navbar-expand-lg navbar-light ">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link mx-4" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-4" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-4" href="#">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-4" href="#">Become a dealer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-4" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-4" href="#">About us</a>
                                    </li>
                                   
                                </ul>
                                
                            </div>
                           
                        </nav>
                        
                    </div>
                    <div className="col-lg-2 col-6 my-3">
                    <form className="form-inline ml-auto">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><img src={search} className='img-fluid' alt="search"/></span>
                                        </div>
                                        <input type="text" className="form-control" id='searchBox' placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                                    </div>
                                </form>
                    </div>
                    </div>
                    </div>
            </section>
        </>
    );
}
export default Navbar;