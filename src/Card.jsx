import React from 'react';

const Card = (props) => {
    return (
        <>

            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} height='220px' className="card-img-top  embed-responsive-item " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <div className="star-conatiner d-flex justify-content-center my-3">
                            <img src={props.imgSrc1} alt="star"/>
                            <img src={props.imgSrc2} alt="star"/>
                            <img src={props.imgSrc3} alt="star"/>
                            <img src={props.imgSrc4} alt="star"/>
                            <img src={props.imgSrc5} alt="star"/>
                        </div>
                        <p className="card-text text-center my-3">{props.description}</p>
                    </div>
                </div>
            </div>


        </>

    );
}
export default Card;