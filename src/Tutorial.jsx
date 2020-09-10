import React from 'react';
import tutorialImage from './images/tutorial.png';
import { NavLink } from 'react-router-dom';
const Tutorial=()=>{
    return(
        <>
        <div className="container-fluid text-center m-0 p-0">
            <div className="row  m-0 p-0">
                <div className="col-md-7 m-0 p-0">
                    <img src={tutorialImage} className='img-fluid' id='tutorial-img' alt=""/>
                </div>
                <div className="col-md-5 m-0 p-0" id='tutorial-col'>
                <h1 id='dimText' className='mt-4 align-self-start mb-0 pb-0'>AMMO</h1>
                    <div className="row m-0 p-0" id='tutorial-row'>
                        <div className="col-8 mx-auto m-0 p-0 " id='tutorial-inner-row'>
                    <h1 className='heading'><strong>HOW</strong> TO ORDER</h1>
                    <p>NOTHING EVER WAS THIS EASY! PICK A FIREARM AND CHECK OUT WITH YOUR OWN ADDRESS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elido eiusmod tempor
                         incididunt ut labore et dolore magna aliqua</p>
                         <button className='btn btn-outline-danger  my-3'>LEARN MORE</button>
                         
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default Tutorial;