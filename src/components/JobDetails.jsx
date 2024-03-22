import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));
  return (
   <div className="mt-10 md:mt-16 lg:mt-24 grid gird-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6">
     <section className="space-y-6 md:col-span-3 lg:col-span-4">
      <h3 className="text-2xl font-bold">{job.job_title}</h3>
      <p>
        <span className="font-bold">Job Description</span> :{" "}
        {job.job_description}
      </p>

      <p>
        <span className="font-bold">Job Responsibility</span> :{" "}
        {job.job_responsibility}
      </p>

      <p>
        <span className="font-bold block">Educational Requirements : </span>
        {job.educational_requirements}
      </p>

      <p>
        <span className="font-bold block">Experiences :</span>{job.experiences}
      </p>
    </section>

    <aside className="bg-red-100 p-4 md:p6 md:col-span-2 flex flex-col justify-between">
      <h4 className="font-bold border-b border-[#b98888] pb-4">Job Details</h4>

      <button className="w-full bg-red-500  hover:bg-red-700 rounded-md py-2 px-4 text-white text-lg font-medium">Apply Now</button>
    </aside>
   </div>
  );
};

export default JobDetails;
