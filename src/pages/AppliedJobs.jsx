import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utilities/localStorage";
import { key } from "localforage";
import AppliedJob from "../components/AppliedJob";

const AppliedJobs = () => {
  const allJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(()=>{
    const storedJobIds = getStoredJobApplication();

    const filteredAppliedJobs = allJobs.filter(job=> storedJobIds.includes(job.id))
    setAppliedJobs(filteredAppliedJobs);
  },[allJobs]);

 

  return (
    <div className="grid gap-6">
     {
      appliedJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>)
     }
    </div>
  );
};

export default AppliedJobs;