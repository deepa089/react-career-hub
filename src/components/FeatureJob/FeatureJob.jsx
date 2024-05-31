import { Link } from 'react-router-dom';
import locationImg from '../../assets/icons/location2.png'
import moneyImg from '../../assets/icons/money.png'
const FeatureJob = ({ job }) => {
  const {id, logo, job_title, company_name,remote_or_onsite, job_type, location,salary } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='pt-2' src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className='flex'>
          <button className='px-5 py-2 border font-extrabold border-[#9873FF]  text-[#9873FF] rounded mr-4'>{remote_or_onsite}</button>
          <button className='px-5 py-2 border font-extrabold border-[#9873FF]  text-[#9873FF] rounded mr-4'>{job_type}</button>
        </div>
        <div className='flex'>
          <img src={locationImg}></img> 
          <div className=' mr-6'>{location}</div>
          
          <img src={moneyImg}></img> 
          <div>{salary}</div>
        </div>
        <div className="card-actions">
          <Link className="btn border-[#9873FF] bg-[#9873FF] text-white" to={`/jobDetails/${id}`}>View Details</Link>
          {/* <button className="btn border-[#9873FF] bg-[#9873FF] text-white">View Details</button> */}
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;