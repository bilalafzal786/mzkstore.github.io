import React from 'react';
import logo from './images/gallery_hero@2x.png';
import phone from './images/ph.svg';
import mail from './images/mail.svg';
import user from './images/user.svg';


const Upernav = () => {
    return (
        <>
            <section id="uperNav" className='d-flex align-items-center text-white'>
                <div className="container">
                    <div className="row align-items-center upernav-row ">
                        <div className="col-lg-12 mx-auto my-2">
                            <div className="row d-flex justify-content-between">
                            <div className="col-5 brand-div ">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} width='130px' height='70px' className='img-fluid' alt="logo" />
                                </a>
                                </div>

                                    <div className="col-7 contacts-divs d-flex justify-content-end py-3 ml-auto">
                                        
                                            <div className="conts d-flex nav-item active mx-3 py-0 my-0" id='hideText'>
                                            <img src={phone} className='img-fluid' alt="phone_svg" />
                                            <a className="nav-link" to="/">+40 (16 )23 456 </a>
                                            </div>
                                       
                                        <li className="nav-item active mx-3" id='hideText'>
                                        <div className="conts d-flex">
                                            <img src={mail} className='img-fluid' alt="phone_svg" />
                                            <a className="nav-link" to="/">admin@mail.com </a>
                                        
                                            </div>
                                        </li>
                                        <li className="nav-item mx-3" id='hideText'>
                                        <div className="conts d-flex">
                                            <img src={user} className='img-fluid' alt="phone_svg" />
                                            <a className="nav-link" to="/">SIGN IN</a>
                                            </div>
                                        </li>
                                     </div>
                                     </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Upernav;