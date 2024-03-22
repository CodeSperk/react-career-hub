import { NavLink } from "react-router-dom";

const FeaturedJob = ({job}) => {
  const {job_title, logo, salary, location, company_name, job_type, remote_or_onsite} = job;
  return (
    <div className="flex flex-col space-y-2 border border-red-400 p-4 rounded-lg">
      <img src={logo} alt={job_title} className="w-20 h-10"/>
      <h4 className="text-xl font-medium">{job_title}</h4>
      <h5>{company_name}</h5>
      <div className="flex gap-3">
        <button className="bg-transparent hover:bg-red-500 hover:text-white py-1 px-3 rounded-md border-2 border-red-500">{job_type}</button>
        <button className="bbg-transparent hover:bg-red-500 hover:text-white py-1 px-3 rounded-md border-2 border-red-500">{remote_or_onsite}</button>
      </div>
      <div className="flex gap-4">
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>

      <NavLink>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">View Details</button>
      </NavLink>


    </div>
  );
};

export default FeaturedJob;