import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const AppliedJob = ({ job }) => {
  return (
    <div className="border border-red-400 p-6 flex items-center justify-between rounded-xl">
      <div className="flex gap-4 items-center">
        <div className="max-w-28">
          <img src={job.logo} alt="" className="w-full" />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold">{job.job_title}</h4>
          <p>{job.company_name}</p>
          <div className="flex gap-3">
            <button className="bg-transparent hover:bg-red-500 hover:text-white py-1 px-3 rounded-md border-2 border-red-500">
              {job.job_type}
            </button>
            <button className="bbg-transparent hover:bg-red-500 hover:text-white py-1 px-3 rounded-md border-2 border-red-500">
              {job.remote_or_onsite}
            </button>
          </div>
          <div className="flex gap-4">
            <p>{job.location}</p>
            <p>Salary: {job.salary}</p>
          </div>
        </div>
      </div>

      <NavLink to={`/job/${job.id}`}>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default AppliedJob;
