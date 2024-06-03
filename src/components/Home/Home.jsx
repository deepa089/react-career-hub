import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <div className='px-36  bg-slate-100'>
                <Banner></Banner>
            </div>
            <div className='px-36'>
                <JobCategoryList></JobCategoryList>
                <FeatureJobs></FeatureJobs>
            </div>
        </div>
    );
};

export default Home;