const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [] 
}

const saveJobApplication= (id) => {
    const storedJobApplication = getStoredJobApplication();
    const existApplication = storedJobApplication.find(jobId => jobId == id)
    if(!existApplication){
        storedJobApplication.push(id);
        return localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}

export {getStoredJobApplication, saveJobApplication}