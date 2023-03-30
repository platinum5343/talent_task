import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, title, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <p>{description}</p>
            <div class="testimonial-name">
            <div>
                <img class="img-circle" src={img} alt=""/>
                </div>
                <div>
                <h5>{name}</h5>
                <small>{title}</small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;