import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';
//console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => setJobs(data), []);

  const filterFunction = ({role, level, tools, languages}) => {
    if (filters.length === 0) { return true; }

    const tags = [role, level];
    if(languages){
        tags.push(...languages);
    }
    if(tools){
        tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f != passedFilter));
  }

  const filteredJobs = jobs.filter(filterFunction);

  return (
    <div className="App">
      <header className='bg-green-200 mb-6'>
            <img src='/images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      <h1 className='font-bold text-2xl 
      text-blue-800 text-center mb-6 p-4'>
            Job Results Below! Filter results by clicking tags on the right.
      </h1>
      {filters.length > 0 && (
        <div className={`flex bg-white shadow-md my-8 mx-10 p-6 rounded`}>
         {filters.map
         ((filter) => (<span className="cursor-pointer m-4 rounded font-bold"
            onClick={() => handleFilterClick(filter)} 
            className='cursor-pointer text-white text-sm bg-blue-800 
            font-bold p-2 bg-opacity-80 m-2 rounded'>× {filter}</span>  
          ))}
      </div>
      )}
      {jobs.length === 0 ? (
          <p>Jobs are loading...</p>
        ) : filteredJobs.map ((job) => (
          <JobBoardComponent job={job} key={job.id} handleTagClick={handleTagClick}/>
        ))
      }
    </div>
  );
}

export default App;
