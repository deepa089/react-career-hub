import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/localStorage';
import locationImg from '../../assets/icons/location2.png'
import moneyImg from '../../assets/icons/money.png'

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleFilterBy = (element) => {
        if(element == 'all'){
            setDisplayJobs(appliedJobs);
        } else if(element == 'Remote'){
            const data = appliedJobs.filter(job => job.remote_or_onsite === element)
            setDisplayJobs(data);    
        }else if(element == 'Onsite'){
            const data = appliedJobs.filter(job => job.remote_or_onsite === element)    
            setDisplayJobs(data);
        }
    }
    useEffect(() => {
        const storedApplicationIds = getStoredJobApplication();
        const appliedjobss = [];

        if (jobs.length > 0) {
            // // 1. option 1
            // const appliedJob = jobs.filter(job => storedApplications.includes(job.id));

            // // 2. option 2
            for (const id of storedApplicationIds) {
                // setCount(count => count + 1)
                const job = jobs.find(job => job.id === id)
                if (job) {
                    // setData(job);
                    appliedjobss.push(job)
                }
            }
        }
        setAppliedJobs(appliedjobss);
        setDisplayJobs(appliedjobss);
    }, [])
    return (
        <div>
            <h2>Applied Jobs : {displayJobs.length}</h2>
            <div className='flex justify-end mb-2'>
                <details className="dropdown">
                    <summary className="btn px-8 py-2">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilterBy('all')}><a>All</a></li>
                        <li onClick={() => handleFilterBy('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterBy('Onsite')}><a>On Site</a></li>
                    </ul>
                </details>
            </div>
            <ul>
                {
                    displayJobs.map(job =>
                        <li key={job.id}>
                            <div className='grid grid-cols-4 border border-gray-300 mb-6 rounded'>
                                <div className='w-60 h-60 bg-slate-200 m-6'>
                                    <img className='py-28 px-12' src={job.logo}></img>
                                </div>
                                <div className='col-span-2 my-14 -mx-8 space-y-3'>
                                    <h2 className='font-semibold'> {job.job_title}</h2>
                                    <p className='text-gray-500'>{job.company_name}</p>

                                    <div className='flex'>
                                        <button className='px-5 py-2 border font-extrabold border-[#9873FF]  text-[#9873FF] rounded mr-4'>{job.remote_or_onsite}</button>
                                        <button className='px-5 py-2 border font-extrabold border-[#9873FF]  text-[#9873FF] rounded mr-4'>{job.job_type}</button>
                                    </div>
                                    <div className='flex'>
                                        <img src={locationImg}></img>
                                        <div className=' mr-6'>{job.location}</div>

                                        <img src={moneyImg}></img>
                                        <div>Salary: {job.salary}</div>
                                    </div>
                                </div>
                                <div className='flex justify-end mr-10'>
                                    <Link className="btn border-[#9873FF] bg-[#9873FF] text-white my-32" to={`/jobDetails/${job.id}`}>View Details</Link>
                                </div>
                            </div>

                        </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;