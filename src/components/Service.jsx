import React from 'react';
import Services from './ServicesList';
import Card from './Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/service.css';

const Service=()=>{
    return(
    <div className="servicesCont container-fluid">
      <h1>Our Services</h1>
      <div className="services">
        {Services.map((service,index)=>{
          return <Card 
            key={index}
            imgUrl={service.imgUrl}
            title={service.title}
            desc={service.desc}
            />
        })}
      </div>
    </div>
    )
}

export default Service;        