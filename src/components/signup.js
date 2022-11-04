import { Link } from "react-router-dom";
import classes from './signUp.module.css';
import StudentNav from './navbar';
import validator from "validator";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import api from "../api/api";
const SignUp=()=> {
    const [username,setUsername] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [passwordErr,setPasswordError] = useState(null);
    const [isLoggedIn,setIsloggedIn] = useState(null);

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
                          if(err.response.status){
                            alert("User Already Exits");
                          }
                        }
        }
    }
    const validatePassword = (e) => {
      let pwd = e.target.value;
  
      if (validator.isStrongPassword(pwd)) {
        setPasswordError("");
      } else {
        setPasswordError("Enter Strong Password!");
      }
      setPassword(pwd)
  
    };
    const [nameError,setNameError] = useState(null);
    const validateName = (e) => {
      let Na = e.target.value;
  
      const validName = new RegExp("^([a-zA-Z ]){1,}$");
      if (validName.test(Na)) {
        setNameError("");
      } else {
        setNameError("Enter Alphabets Only!");
      }
      setUsername(e.target.value)  
    };
    useEffect(()=>{
      const user = localStorage.getItem('role')
      if(user)
        navigate('/home');
    })
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
                onChange={(e) => validateName(e)}
                required
              />
              <span
                          style={{
                            color: "red",
                          }}
                        >
                          {nameError}
                        </span>
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
                onChange={(e) => validatePassword(e)}
              />
               <span
                          style={{
                            color: "red",
                          }}
                        >
                          {passwordErr}
                        </span>
            </div>

            <div className={classes.formField}>
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="password"
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
    <Footer/>
    </>
  );
}

export default SignUp;