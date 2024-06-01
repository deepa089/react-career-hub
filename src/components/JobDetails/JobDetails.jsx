import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import backImage from '../../assets/images/bg1.png';
import backImage2 from '../../assets/images/bg2.png';
import location from '../../assets/icons/location2.png';
import calendar from '../../assets/icons/calendar.png';
import phone from '../../assets/icons/phone.png';
import money from '../../assets/icons/money.png';
import email from '../../assets/icons/email.png';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const jobDetail = jobs.find(job => job.id == idInt)
    console.log(jobs, id);
    console.log(jobDetail);

    const handleApplyNow = () => {
        saveJobApplication(idInt);
        toast("Applied Successfully");
    } 
    return (
        <div>
            <h2 > Job Details</h2>
            <div id='jobDetailsHeader'>
            </div>
            <div className='grid grid-cols-3 gap-4 my-4'>
                <div className='col-span-2'>
                    <div>
                        <span className='font-bold'>Description : </span> {jobDetail.job_description}
                    </div>
                    <br />
                    <div>
                        <span className='font-bold'>Job Responsibility :</span> {jobDetail.job_responsibility}
                    </div>
                    <br />
                    <div>
                        <p className='font-bold'>Educational Requirements :</p>
                        <p>{jobDetail.educational_requirements}</p>
                    </div>
                    <br />
                    <div>
                        <p className='font-bold'>Experiences :</p>
                        <p>{jobDetail.experiences}</p>
                    </div>
                </div>
                <div>
                    <div className='bg-indigo-50 rounded p-5 mb-5'>
                        <h3 className='font-extrabold mb-5'>Job Details</h3>
                        <hr />
                        <div className='my-4'>
                            <div className='flex'>
                                <img src={money}></img><span className='font-bold ml-2'>Salary :</span>{jobDetail.salary} (Per Month)
                            </div>
                            <div className='flex'>
                                <img src={calendar}></img><span className='font-bold ml-2'>Job Title :</span>{jobDetail.salary}
                            </div>
                        </div>
                        <h3 className='font-extrabold mb-5'>Contact Information</h3>
                        <hr />
                        <div className='my-4'>
                            <div className='flex'>
                                <img src={phone}></img><span className='font-bold ml-2'>Phone :</span>{jobDetail.contact_information.phone}
                            </div>
                            <div className='flex'>
                                <img src={email}></img><span className='font-bold ml-2'>Email :</span>{jobDetail.contact_information.email}
                            </div>
                            <div className='flex'>
                                <img className='w-6 h-6' src={location}></img>
                                <p>
                                    <span className='font-bold ml-2'>Address:</span>{jobDetail.contact_information.address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="btn border-[#9873FF] bg-[#9873FF] text-white w-full" onClick={handleApplyNow}>Apply Now</Link>
                    </div>

                </div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default JobDetails;