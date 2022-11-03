import { Link } from "react-router-dom";
import classes from './signUp.module.css';
import StudentNav from './navbar';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
const SignUp=()=> {
    const [username,setUsername] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const navigate = useNavigate();
  async function login(e){
    e.preventDefault();
        if(password!==confirmPassword){
            alert('password doesnt match');
            return;
        }
        else{
            try{
                const userData = {userName:username,userEmail:email,userPassword:password};
             const response = await api.post('/registerUser',userData);
            //  console.log("hello");
            //  setTimeout(()=>{

            //  },2000);
               navigate('/login');
                         }
                        catch(err){
                            console.log(err);
                        }
        }
    }
  return (
    <>
    <StudentNav/>
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.cardForm}>
          <h4>Create your MAP Account</h4>
          <form >
            <div className={classes.formField}>
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                placeholder="Enter your Username"
                onChange={(e)=> setUsername(e.target.value)}
                required
              />
            </div>

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
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>

            <div className={classes.formField}>
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="repeat-password"
                id="repeat-password"
                placeholder="Re-enter password"
                required
                onChange={(e)=> setConfirmPassword(e.target.value)}
              />
            </div>
            <button className={classes.signupBtn}type="submit" value="submit" onClick={login} >SignUp</button>
          </form>
          <div className={classes.cardLogin}>
            <p>
              Already a User ? <Link to="/Login" >Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;