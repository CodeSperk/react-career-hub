import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);


  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl font-extrabold">Oops!</h1>
      <p>Sorry an unexpected error has occured</p>
      <p> Error message : {error.error?.message}</p>
      <p className="text-xl font-bold"> Error status : {error.status}</p>
    </div>
  );
};

export default ErrorPage;