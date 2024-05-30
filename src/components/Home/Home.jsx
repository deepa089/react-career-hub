import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;