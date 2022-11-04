import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Switch, Route,Routes} from 'react-router-dom';
import { Profile } from './components/profile';
import Login from './components/login';
import SignUp from './components/signup';
import StudentNav from './components/navbar';
import { AdminDashboard } from './components/adminDashboard';
import { StudentDashboard } from './components/studentDashboard';
import { CourtDetails } from './components/courtDetails';
import { Home } from './components/home';
import { CoachDashBoard } from './components/coachDashboard';
import {Default} from './components/default';
// import {AuthProvider} from './components/auth';
// import AdminRoute from './routes/adminRoutes'
function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Default/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/student/dashboard' element={<StudentDashboard/>}/>
        <Route path='/admin/dashboard/court' element={<CourtDetails/>}/>
        <Route path='/coach/dashboard' element={<CoachDashBoard/>}/>

        <Route path='/home' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;