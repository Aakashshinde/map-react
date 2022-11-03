// import {NavLink,Link,Route,Routes} from 'react-router-dom';
// // import { useAuth } from './auth';
// export const Navbar = () =>{
//     const navLinkStyles = ({isActive}) =>{
//         return{
//             fontWeight: isActive ? 'bold': 'normal',
//             textDecoration: isActive ? 'none' : 'underline',
//         }
//     }
// //    const auth = useAuth();
//        return(
//         <div className="nav">
//             <NavLink  to="/" style={navLinkStyles}>
//                 Home
//             </NavLink>
//             <NavLink  to="/about" style={navLinkStyles}>
//                 About
//             </NavLink>
//             <NavLink  to="/products" style={navLinkStyles}>
//                 Products
//             </NavLink>
//         <NavLink  to="/profile" style={navLinkStyles}>
//             profile 
//         </NavLink>
//         {
//             (
//             <NavLink style={navLinkStyles} to="/login">Login
//             </NavLink>
            
//             )
//         }
//         {
//             (
//             <NavLink style={navLinkStyles} to="/logout">Logout
//             </NavLink>
            
//             )
//         }
//         </div>
//     )
// }

import {Link} from 'react-router-dom';
import classes from './studentNav.module.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const  StudentNav=()=>{
    const navigate =  useNavigate();
    const [isLoggedIn,setIsloggedIn] = useState(false);
 useEffect(()=>{
     if(localStorage.getItem('user')!=null){
        setIsloggedIn(true);
         }
         })

        function logout(){
            localStorage.removeItem('userId');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
            window.location.reload(); 
        }
 return (
    
    <header className={classes.header}>
        <div className={classes.logoDiv}>
        {/* <img src='src/images/background.jpg' alt="logo"/> */}
        <div >My Attendance Portal</div>
        </div>
        <nav>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>  
                <li>
                    <a>Profile</a>
                </li>
                
                    {isLoggedIn?(
                        <li>
    
                  <a onClick={logout}>Logout</a>
                  
                    </li>  
                    ):
(
                        <li>
            
                  <a onClick={()=>navigate("/signup")}>SignUp</a>
                    
                    </li>  
)}
                    

            </ul>
        </nav>
    </header>
 );
}

export default StudentNav;