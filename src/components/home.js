import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const Home=()=>{
    const navigate = useNavigate();
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
    useEffect(()=>{
        navHome();
    })
    return(
        <>
        Homee
        </>
    )
}