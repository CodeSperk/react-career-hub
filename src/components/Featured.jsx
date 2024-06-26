import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import FeaturedJob from "./FeaturedJob";


const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(()=> {
    fetch("jobs.json")
    .then(res=> res.json())
    .then(data => setJobs(data))
  },[])


  return (
    <section className="mt-10 md:mt-16 lg:mt-24">
      <SectionHeader
        title={"Featured Jobs"}
        description={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {
        jobs.slice(0, dataLength).map((job) => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
      }
      </div>
   
     <div className={`text-center ${dataLength===jobs.length && "hidden"}`}>
     <button onClick={()=>setDataLength(jobs.length)} className="bg-red-500 hover:bg-red-700 py-3 px-6 rounded-lg text-white text-xl mt-8">Show all</button>
     </div>
     
    </section>
  );
};

export default Featured;
