import React from 'react';
import StarRating from './StarRating';

const Reviews = () => {
    return (
        <div className="row row-cols-3 mb-2">
            <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", margin: "15px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Adam</span>
                    <span><StarRating rating={3}/></span> 
                </div>
                <div className="card-body">
                    <p className="card-text">It was awesome!</p>
                </div>
            </div>

            <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", margin: "15px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Adam</span>
                    <span><StarRating rating={3}/></span> 
                </div>
                <div className="card-body">
                    <p className="card-text">It was awesome!</p>
                </div>
            </div>

            <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", margin: "15px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Adam</span>
                    <span><StarRating rating={3}/></span> 
                </div>
                <div className="card-body">
                    <p className="card-text">It was awesome!</p>
                </div>
            </div>

            <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", margin: "15px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Adam</span>
                    <span><StarRating rating={3}/></span> 
                </div>
                <div className="card-body">
                    <p className="card-text">It was awesome!</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;
