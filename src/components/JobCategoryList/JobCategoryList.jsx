import React, { useEffect, useState } from 'react';

const JobCategoryList = () => {
    const [jobsCategoryList, setJobCatList] = useState([]) 
    // const [jobsCategory, setJobCatList] = useState([]) 

    useEffect(() =>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=>setJobCatList(data));
    } , [])
    return (
        <div>
            <h2>Job Category List {jobsCategoryList.length}</h2>
        </div>
    );
};

export default JobCategoryList;