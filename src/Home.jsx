import React from 'react';
import Categories from './Categories';
import Featured from './Featured';
import Offer from './Offer';
import Tutorail from './Tutorial';
import Blog from './Blog'; 
import Footer from './Footer'; 



import headerImage from './images/Screenshot.png';

const Home=()=>{
    return(
        <>
        <section id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-5 order-lg-1 order-2" >
                        <Categories/>
                    </div>
                    <div className="col-md-9 my-5 order-lg-2" id='header-image'>
                        <img src={headerImage} alt="header_img" className='img-fluid'/>
                    </div>

                </div>
            </div>
        </section>
        <section id="featuredProducts" className='my-5'>
            <Featured/>

        </section>
        <section id="offer" className='mt-5 py-5'>
            <Offer/>

        </section>
        <section id="tutorial">
            <Tutorail/>

        </section>
        <section id="blog">
            <Blog/>

        </section>
        <Footer/>
        </>
    );
}
export default Home;