import React from 'react';

const JobBoardComponent = ({job, handleTagClick,}) => {

    const tags = [job.role, job.level];
    if(job.languages){
        tags.push(...job.languages);
    }
    if(job.tools){
        tags.push(...job.tools);
    }

    return (
    <div className={`flex bg-white shadow-md m-4 p-6 rounded ${job.featured && `border-l-4 border-blue-700`}`}> 
        <div>
            <img src={job.logo} alt={job.company} />
        </div>
        <div className= 'flex flex-col justify-between ml-4'>
            <h3 className='font-bold text-blue-700 mt-2'>
                {job.company}
                {job.new && (
                <span className='bg-blue-700 ml-2.5 px-2 py-1 font-medium rounded-full text-sm text-white'>NEW!</span>
                )}
                {job.featured && (
                <span className='bg-gray-600 ml-1.5 px-2 py-1 font-medium rounded-full text-sm text-white'>FEATURED</span>
                )}
            </h3>
            <h2 className='font-bold text-lg text-gray-900'>{job.position}</h2>
            <p className='font-light text-gray-700 mb-2'>{job.postedAt} · {job.contract} · {job.location}</p>
        </div>
        <div className='flex items-center ml-auto'>
            {tags
                ? tags.map((tag) => (
                <span onClick={() => handleTagClick(tag)} className='cursor-pointer text-white text-sm bg-blue-800 
                font-bold p-2 m-1.5 rounded bg-opacity-80'>{tag}</span>))
                : ''}
        </div>
    </div>
    )
};

export default JobBoardComponent;