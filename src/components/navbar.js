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
            // window.location.reload(); 
            navigate('/');
        }

        function navHome(){
            if(localStorage.getItem('role')=="5001"){
                navigate('/admin/dashboard',{replace:true});
            }
            else if(localStorage.getItem('role')=="2000"){
                navigate('/coach/dashboard',{replace:true});
            }
            else if(localStorage.getItem('role')=="2001"){
                navigate('/student/dashboard',{replace:true});
            }
            else{
                navigate('/login',{replace:true});
            }
        }
 return (
    
    <header className={classes.header}>
        <div className={classes.logoDiv}>
        {/* <img src='src/images/background.jpg' alt="logo"/> */}
        <div ><Link to="/" className={classes.headerlink}>My Attendance Portal</Link></div>
        </div>
        <nav>
            <ul className={classes.headerul}>
                <li className={classes.headerli}>
                    <a className={classes.headera} onClick={navHome}>Home</a>
                </li>
                <li className={classes.headerli}>
                    <a className={classes.headera}>About</a>
                </li>  
                <li className={classes.headerli}>
                    <a className={classes.headera}>Profile</a>
                </li>
                
                    {isLoggedIn?(
                        <li className={classes.headerli}>
    
                  <a className={classes.headera} onClick={logout}>Logout</a>
                  
                    </li>  
                    ):
(
                        <li className={classes.headerli}>
            
                  <a className={classes.headera} onClick={()=>navigate("/signup")}>SignUp</a>
                    
                    </li>  
)}
                    

            </ul>
        </nav>
    </header>
 );
}

export default StudentNav;