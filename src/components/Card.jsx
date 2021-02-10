import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return(
        <div className="mycard" >
            <img src={props.imgUrl} alt='image' />
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <button type="button" class="btn btn-outline-primary">Check Now</button>     
        </div>
    )
};

export default Card;