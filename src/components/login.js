import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import jwt_decode from "jwt-decode";
// import { useAuth } from "./auth";

// export const Login = () =>{
//     const [email,setEmail] = useState('');
//     const [pwd,setPwd] = useState('');
//     const [wrongPassword,setWrongPassword] = useState(false);
//     const auth = useAuth();
//     const navigate = useNavigate();

//     const handleLogin = async (e) =>{
//         e.preventDefault();
//         const userData = {email,pwd};
//         try{
//             const response = await api.post('/auth',userData);
//              const token = response.data.accessToken;
//              let decoded = jwt_decode(token);
//              auth.login(decoded.UserInfo);
//             navigate('/');
//         }
//         catch(err){
//             console.log(err);
//             setWrongPassword(true);
//         }
        
//     }

//     useEffect(()=>{
//         if(wrongPassword)
//          document.getElementById('wrongPassword').innerHTML="wrong Password";
//     });

//     return (
//         <div>
//             <label>
//                 Username:{' '}
//                 <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
//                 password:{' '}
//                 <input type="password" onChange={(e)=> setPwd(e.target.value)}/>
//                 <button onClick={handleLogin}>Login</button>
//                 {
//                     wrongPassword && <label id="wrongPassword">Wrong password</label>
//                 }
//             </label>
//         </div>
//     )
// }

import classes from "./Login.module.css";
import StudentNav from './navbar';

function Login() {
    const [userEmail,setEmail] = useState(null);
    const [userPassword,setPwd] = useState(null);
    // const auth = useAuth();
    const navigate = useNavigate();
  async function login(e){
        e.preventDefault();
        const userData = {userEmail,userPassword};
        try{
            const response = await api.post('/loginUser',userData);
              const token = response.data.accessToken;
             let decoded = jwt_decode(token);
              localStorage.setItem("user",decoded.UserInfo.username);
             localStorage.setItem("role",decoded.UserInfo.roles);
             localStorage.setItem("userId",decoded.UserInfo.userId);
             if(decoded.UserInfo.roles=="5001")
              navigate('/admin/dashboard');
            else if(decoded.UserInfo.roles=="2001")
                navigate('/student/dashboard',{replace:true});
            else
            navigate('/coach/dashboard');
            return;
        }
        catch(err){
            console.log(err);
            alert('Wrong password');
        }
    }
  return (
    <>
    <StudentNav/>
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.cardForm}>
          <h4>Login to your MAP Account</h4>
          <form>
            <div className={classes.formField}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div className={classes.formField}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={(e)=> setPwd(e.target.value)}

              />
            </div>
            <button className={classes.loginBtn} type="submit" onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;