import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useLocation } from "react-router-dom";
import classes from "../styles/Table.module.css";
import Footer from "./footer";
import StudentNav from "./navbar";

export const CourtDetails = (props)=>{
const location = useLocation(); 
  const [data,setData] = useState(null);    
  async function getDetails(){
     try{
         const response = await api.post('/getStudentDetailsOfCourt',{courtId:location.state.court_id});
         setData(response.data);
     }
     catch(e){
         console.log(e)
     }
 }
 useEffect(()=>{
     getDetails();
 })
async function removeStudent(user_id){
    try{
        const response = await api.post('/deleteStudent',{userId:user_id});
        }
    catch(e){
        console.log(e)
    }
}

 return (
   <div>
    <StudentNav/>
     <div className={classes.tablediv}>
     <table className={classes.usersTable}>
     <tbody>
      
        
         <div>
         <th>user Id</th>
         <th>user Name</th>
         <th>user email</th>
         <th>Remove</th>
         
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
                   onClick={()=>removeStudent(user_id)}
                 >
                   Remove Student
                 </button>
               </td>
             </tr>
           );
         })}
       </div>
  
   </tbody>
   </table>
     </div>
   <Footer/>
   </div>
 );
}