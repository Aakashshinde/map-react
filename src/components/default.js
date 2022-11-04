import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import StudentNav from "./navbar";
import classes from './student/default.module.css';
// import homeimg from './images/home.png';
export const Default=()=>{
    return(
        <>
        <div className={classes.body}>
        <StudentNav/>
        <div className={classes.home}>

            <div className={classes.text}>Welcome To My Attendance Portal..!</div>
            <div>
                
            </div>
        </div>

        <Footer/>
        </div>
        </>
    )
}