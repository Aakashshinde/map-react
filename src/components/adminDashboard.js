import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import classes from "./Student.module.css";
import StudentNav from './navbar';
import { AdminDetails } from './adminDeatils';
import api from "../api/api";
import { useState } from 'react';
import { StudentDetails } from './studentDetails';
import { CoachDetails } from './coachDetails';
import Footer from './footer';
export const AdminDashboard = () =>{
    const [isAdmin,setIsAdmin] = useState(false);

    const styles={
        width:"30%"
    };
    const [courts,setCourts] = useState(null);
    const [students,setStudents] = useState(null);
    const [coaches,setCoaches] = useState(null);
    const [iscoach,setIscoach] = useState(false);
    const [isStudent,setIsStudent] = useState(false);
    const [isCourt,setIsCourt] = useState(false);
    async function getCourts(){
        try{
            const response = await api.post('/getAllCourtDetails');
            setCourts(response.data.courts);
            setIsCourt(true);
            setIsStudent(false);
            setIscoach(false);
        }
        catch(e){
            console.log(e)
        }
    }
    async function getStudents(){
        try{
            const response = await api.post('/getStudentDetails');
            setStudents(response.data.students);
            setIsStudent(true);
            setIscoach(false);
            setIsCourt(false);
        }
        catch(e){
            console.log(e)
        }
    }
    async function getCoachs(){
        try{
            const response = await api.post('/getAllCoachDetails');
            setCoaches(response.data.coaches);
            setIscoach(true);
            setIsCourt(false);
            setIsStudent(false);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        const role=localStorage.getItem('role');
    if(role=="5001")
     setIsAdmin(true);
    })
    return(
        isAdmin &&
        <>
        <StudentNav/>
         <div>
        <div  class={classes.vnav}>
        <button className='primary' onClick={getCourts} class={classes.vnavButton}>courts</button>
        <button className='primary' onClick={getStudents} class={classes.vnavButton}>Students</button>
        <button className='primary' onClick={getCoachs} class={classes.vnavButton}>Coach</button>
        </div>
        <div>
       {isCourt &&  <AdminDetails props={courts} />}
       {isStudent && <StudentDetails props={students} /> }
       {iscoach && <CoachDetails props={coaches} />}
        </div>
    </div>
    <Footer/>
    
    </>
    
    )
}