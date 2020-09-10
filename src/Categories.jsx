import React from 'react';
import user from './images/icons8-menu.svg';
import arrow from './images/arrow.svg';


const Categories = () => {
    return (
        <>
            <div className="container" id='cat'>
                <div className="d-flex" id='col-1'  >
                    <img src={user} className='img-fluid  ml-3 mr-2 ' alt="phone_svg" />
                    <a className=" text-uperCase mt-2" to="/">CATEGORIES</a>
                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Guns</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Ammunation</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Wearables</a>
                    <img src={arrow} className='img-fluid  ml-auto' alt="phone_svg" />

                </div><div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Supplies</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div><div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Electronics</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Gun Cases</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Knife  Tools</a>
                    <img src={arrow} className='img-fluid  ml-auto my-0 py-0' alt="phone_svg" />

                </div>
                <div className="d-flex p-2" id='para'  >
                    <a className=" text-uperCase mt-2 px-4" to="/">Cleaning Equipment</a>
                    <img src={arrow} className='img-fluid  ml-auto ' alt="phone_svg" />

                </div>
            </div>

        </>
    );
}
export default Categories;