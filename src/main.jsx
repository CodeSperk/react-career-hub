import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root/Root.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import AppliedJobs from './pages/AppliedJobs.jsx'
import Statistics from './pages/Statistics.jsx'
import JobDetails from './components/JobDetails.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch("./jobs.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:() => fetch("./jobs.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
