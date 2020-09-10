import React from 'react';
import logo from './images/gallery_hero@2x.png';
import facebook from './images/facebook.svg';
import google from './images/google-plus.svg';
import twitter from './images/twitter.svg';
import linked from './images/linkedin.svg';



const Footer=()=>{
    return(
        <>
            <div className="container-fluid  py-5" id='footer'>
                <div className="row my-5">
                    <div className="col-md-4 mx-auto text-center">
                        <div className="row mb-5 align-items-center">
                            <div className="col">
                        <img src={logo} alt="logo" id='logo-img' className='img-fluid'/>
                        <h5 className='font-weight-100'>Weapon Store</h5>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col footerPara ">
                                <p>123, New Lenox<br></br>Chicago, IL 60606</p>
                            </div>
                            <div className="col footerPara">
                                <p>Phone: 23-456-789<br></br>Fax: 098-765-432</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col ">
                            <img src={facebook} alt="facebook" className='img-fluid mx-3' id='ico'/>
                            <img src={google} alt="google" className='img-fluid mx-3' id='icons'/>
                            <img src={twitter} alt="twitter" className='img-fluid mx-3' id='icons'/>
                            <img src={linked} alt="linkedin" className='img-fluid mx-3' id='icons'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  py-5" id='lowerFooter'>
                <p>MGK © 2020 All Rights Reserved.</p>

            </div>

        </>
    )
}
export default Footer;