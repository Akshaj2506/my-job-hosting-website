import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import Error404Page from './pages/Error404Page';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobsPage from './pages/AddJobsPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    await fetch('/api/jobs', {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  const deleteJob = async (jobId) => {
    await fetch(`/api/jobs/${jobId}`,{
      method: 'DELETE'
    })
    return;
  }
  const updateJob = async (jobDetails) => {
    await fetch(`/api/jobs/${jobDetails.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "application/json"
      },
      body : JSON.stringify(jobDetails)
    })
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage removeJob={deleteJob} />} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobPage onSubmitUpdate={updateJob}/>} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobsPage addJobOnSubmit={addJob}/>}/>
        <Route path="*" element={<Error404Page/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;