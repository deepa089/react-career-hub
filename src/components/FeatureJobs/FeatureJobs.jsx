import { useLoaderData } from 'react-router-dom';
import FeatureJob from '../FeatureJob/FeatureJob';
import { useState } from 'react';

const FeatureJobs = () => {
    const jobs = useLoaderData();
    const [dataLength, setDataLength] = useState(4);
    // const handleShowAllBtn = (dataLength) => {
    //     setDataLength(dataLength);
    // }
    console.log(dataLength);
    console.log(jobs.length);
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-semibold'>Feature Jobs {jobs.length}</h2>
            <p className='pb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-4'>
                {
                    jobs.slice(0, dataLength).map(job => <FeatureJob key={job.id} job={job}></FeatureJob>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button className='btn border-[#9873FF] bg-[#9873FF] text-white my-5 mx-auto' onClick={() => setDataLength(jobs.length)}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;