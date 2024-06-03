import bannerImg from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex'>
            <div className='w-1/3'>
                <div className='text-6xl font-extrabold'>
                    <h1>One Step </h1>
                    <h1> Closer To Your </h1>
                </div>
                <span className='text-purple-500 font-extrabold text-6xl'> Dream Job</span>
                <p className='w-96'>Explore thousands of job opportunities with all the information you need. 
                    Its your future. Come find it.
                     Manage all your job application from start to finish.</p> <br/>
                <button className='bg-purple-500 text-white py-2 px-5 rounded'>Get Started</button>     
            </div>
            
            <div className='w-2/3 flex justify-end'>
                <img className='w-96' src={bannerImg}></img>
            </div>
        </div>
    );
};

export default Banner;