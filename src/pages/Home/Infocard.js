import React from 'react';

const Infocard = ({img,cardTitle,drisciption,bgColor}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-4 ${bgColor}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardTitle}</h2>
    <p>{drisciption}</p>
    
  </div>
</div>
    );
};

export default Infocard;