import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useLocation } from "react-router-dom";
import classes from "../styles/Table.module.css";
import Footer from "./footer";
import StudentNav from "./navbar";

export const CoachDashBoard = (props)=>{
  const [data,setData] = useState(null);   
   const [coaches,setCoaches] = useState(null);
   const [courtId,setCourtId] = useState(null);
   const coach_id = localStorage.getItem('userId');
  async function getDetails(){
     try{
        const res = await api.post('/getAllCoachDetails');
        setCoaches(res.data.coaches);
            for(let i =0 ;i<coaches.length;i++){
                if(coaches[i].coach_id==coach_id){
                    setCourtId(coaches[i].court_id);
                    break;
                }
            }
         const response = await api.post('/getStudentDetailsOfCourt',{courtId:courtId});

         setData(response.data);
        //  for(let i=0;i<data.length;i++){
        //     // console.log(data);
        //     const response = await api.post('/getAttendance',{userId:data[i].user_id});
        //     console.log(response.data.attendance[0].date);
        // }
     }
     catch(e){
         console.log(e)
     }
 }
 useEffect(()=>{
     getDetails();
 })
async function markAttendance(user_id){
    try{
         await api.post('/giveAttendance',{userId:user_id,status:"true"});
        document.getElementById(user_id).style.backgroundColor = "red";
    }
    catch(e){
        console.log(e)
    }
}

 return (
   <div>
    <StudentNav/>
     <table className={classes.usersTable}>
     <tbody>
         <div>
         <th>user Id</th>
         <th>user Name</th>
         <th>user email</th>
         <th>Attendance</th>
         
     {data!=null && data.map(({ user_id,user_name,user_email }) => {
           return (
             <tr key={user_id}>
               <td>{user_id}</td>
               <td>{user_name}</td>
               <td>{user_email}</td>
               <td className={classes.operation}>
                 <button
                   className={classes.submitButton}
                   id={user_id}
                   onClick={()=>markAttendance(user_id)}
                 >
                   Mark Attendance
                 </button>
               </td>
             </tr>
           );
         })}
       </div>
  
   </tbody>
   </table>
   <Footer/>
   </div>
 );
}