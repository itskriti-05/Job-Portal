import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}from "react-router-dom";
import{Toaster} from "react-hot-toast";


import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import JobSeekerDashboard from './pages/JobSeeker/JobSeekerDashboard';
import JobDetails from './pages/JobSeeker/JobDetails';
import SavedJobs from './pages/JobSeeker/SavedJobs';
import UserPorfile from './pages/JobSeeker/UserPorfile';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import JobPostingForm from './pages/Employer/JobPostingForm';
import ManageJobs from './pages/Employer/ManageJobs';
import ApplicationViewer from './pages/Employer/ApplicationViewer';
import EmployerProfilePage from './pages/Employer/EmployerProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* these are public routes  */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/find-jobs" element={<JobSeekerDashboard/>} />
          <Route path="/job/:jobId" element={<JobDetails/>}/>
          <Route path="/saved-jobs" element={<SavedJobs/>}/>
          <Route path="/profile" element={<UserPorfile/>}/>


          {/* protected routes */}
          <Route element={<ProtectedRoute requiredRole="employer" />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard/>} />
            <Route path="/post-job" element={<JobPostingForm/>}/>
            <Route path="/manage-jobs" element={<ManageJobs/>}/>
            <Route path="/applicants" element={<ApplicationViewer/>}/>
            <Route path="/company-profile" element={<EmployerProfilePage/>}/>
          </Route>
           {/* catch all routes */}

           <Route path="*"  element ={<Navigate to="/" replace />}      />

        </Routes>
     </Router>
     <Toaster 
     toastOptions={{
      className : "",
          style:{
            fontSize:"13px",
          },
     }}
     />
    </div>
  )
}

export default App
