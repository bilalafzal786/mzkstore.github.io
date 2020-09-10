import React from 'react';
import Card from './Card';
import image1 from './images/nosler.png';
import image2 from './images/secondImage.png';
import image3 from './images/iwi.png';
import image4 from './images/breta.png';
import starFull from './images/startFull.svg';
import starDim from './images/starDim.svg';



const Featured=()=>{
    return(
        <>
        <div className="conatiner text-center mt-5" >
            <h1 className='text-upercase'><strong>FEATURED </strong>PRODUCTS</h1>
            <h1 className='text-danger font-weight-bold my-5'>//</h1>
            <p className='text-secondary'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR<br></br> ADIPISICING ELIT SED DO EIUSMOD</p>
        </div>
        <div className="container my-5">
            <div className="rwo">
                <div className="col-12 mx-auto">
                    <div className="row g-4">
                        <Card title='Beretta JMN9S15CTC BU9 Nano 6+1 9mm 3.07″'
                         description='112$'
                         imgSrc={image1}
                         imgSrc1={starFull}
                         imgSrc2={starFull}
                         imgSrc3={starFull}
                         imgSrc4={starFull}
                         imgSrc5={starFull}
                         />
                         <Card title='Beretta JMN9S15CTC BU9 Nano 6+1 9mm 3.07″'
                         description='112$'
                         imgSrc={image2}
                         imgSrc1={starFull}
                         imgSrc2={starFull}
                         imgSrc3={starFull}
                         imgSrc4={starDim}
                         imgSrc5={starDim}
                         /><Card title='Beretta JMN9S15CTC BU9 Nano 6+1 9mm 3.07″'
                         description='112$'
                         imgSrc={image3}
                         imgSrc1={starFull}
                         imgSrc2={starFull}
                         imgSrc3={starFull}
                         imgSrc4={starFull}
                         imgSrc5={starDim}
                         /><Card title='Beretta JMN9S15CTC BU9 Nano 6+1 9mm 3.07″'
                         description='112$'
                         imgSrc={image4}
                         imgSrc1={starFull}
                         imgSrc2={starFull}
                         imgSrc3={starFull}
                         imgSrc4={starFull}
                         imgSrc5={starDim}
                         />
                         </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Featured;