import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route,Routes} from 'react-router-dom';
import { Profile } from './components/profile';
import Login from './components/login';
import SignUp from './components/signup';
import StudentNav from './components/navbar';
import { AdminDashboard } from './components/adminDashboard';
// import {AuthProvider} from './components/auth';
// import AdminRoute from './routes/adminRoutes'
function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<StudentNav/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;