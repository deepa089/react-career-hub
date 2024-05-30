import React from 'react';

const FeatureJob = ({job}) => {
    const {logo,job_title,company_name } = job ;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default FeatureJob;