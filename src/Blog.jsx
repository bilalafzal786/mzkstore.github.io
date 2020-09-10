import React from 'react';
import mainImage from './images/image-8.png';
import image1 from './images/image1@1x.png';
import image2 from './images/unnamed.png';
import image3 from './images/image2.png';
import image4 from './images/girls-with-guns.png';
import brand from './images/Screenshot@2x.png';



const Blog=()=>{
    return(
        <>
        <div className="container text-light" id='blog'>
            <div className="row mb-5 pb-5">
                <h1 className='my-5 pt-5 '><strong>OUR</strong> BLOGS</h1>
                <div className="col-md-6 pr-5">
                    <img src={mainImage} alt="imag-main" className='img-fluid'/>
                    <h3 className='mt-5'>INSTRUCTIONS <span>&#38;</span> TRAINING</h3>
                    <p id='paragraphBlog'>POSTED <span id='red-text'>FEBURARY,23 2020</span> / BY JONES</p>
                    <p className='my-3 large-para'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                     doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo...</p>
                     <button className='btn btn-danger my-4'>LEARN MORE</button>

                </div>
                <div className="col-md-6 pl-5 border-left border-secondary">
                    <div className="row">
                        <div className="col d-flex mb-2">
                            <img src={image1} alt=""/>
                            <div className="info mt-1 pl-3">
                            <h5>INSTRUCTIONS <span>&#38;</span> TRAINING</h5>
                            <p id='paragraphBlog'>POSTED <span id='red-text'>FEBURARY,23 2020</span> / BY JONES</p>
                            </div>
                        </div>
                        <div className="col d-flex my-2">
                            <img src={image2} alt=""/>
                            <div className="info mt-1 pl-3">
                            <h5>INSTRUCTIONS <span>&#38;</span> TRAINING</h5>
                            <p id='paragraphBlog'>POSTED <span id='red-text'>FEBURARY,23 2020</span> / BY JONES</p>
                            </div>
                        </div> <div className="col d-flex my-2">
                            <img src={image3} alt=""/>
                            <div className="info mt-1 pl-3">
                            <h5>INSTRUCTIONS <span>&#38;</span> TRAINING</h5>
                            <p id='paragraphBlog'>POSTED <span id='red-text'>FEBURARY,23 2020</span> / BY JONES</p>
                            </div>
                        </div> <div className="col d-flex mt-2">
                            <img src={image4} alt=""/>
                            <div className="info mt-1 pl-3">
                            <h5>INSTRUCTIONS <span>&#38;</span> TRAINING</h5>
                            <p id='paragraphBlog'>POSTED <span id='red-text'>FEBURARY,23 2020</span> / BY JONES</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <div className="row m-0 p-0">
                <img src={brand} className='img-fluid m-0 p-0' alt="brand" id='brand'/>
            </div>
        
        </>
    );
}
export default Blog;