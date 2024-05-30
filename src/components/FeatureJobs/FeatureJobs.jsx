import { useLoaderData } from 'react-router-dom';
import FeatureJob from '../FeatureJob/FeatureJob';

const FeatureJobs = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Feature Jobs {jobs.length}</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <FeatureJob key={job.id} job={job}></FeatureJob>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;