import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../api/api";
import classes from '../styles/Table.module.css';
export const AdminDetails = (props) =>{
    const [data,setData] = useState(null); 
    const [coachId,setCoachId] = useState(null);
   const [newCourtName,setNewCourtName] = useState(null);
   const [student,setStudent] = useState(null);
   const navigate = useNavigate();
   async function getStudents(){
    try{
        const response = await api.post('/getAllCourtDetails');
        setData(response.data.courts);
    }
    catch(e){
        console.log(e)
    }
}
useEffect(()=>{
    getStudents();
})
async function addStudent(court_id){
  try{
    console.log(court_id,student);
    const response = await api.post('/addStudentToCourt',{courtId:court_id,userId:student});
    alert("Student Added");
}
catch(err){
    console.log(err);
}
}
async function assignCoach(court_id){
    try{
    
        const response = await api.post('/assignCoachToCourt',{courtId:court_id,userId:coachId});
        alert("Coach Assigned");
        // console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
    async function addNewCourt(e){
        e.preventDefault();
        try{
            const response = await api.post('/addCourt',{courtName:newCourtName});
        }
        catch(err){
            console.log(err);
        }
     }
    return (
       
      <div>
        <table className={classes.usersTable}>
        <tbody>
            <div>
            <th>Court Id</th>
            <th>Coach Id</th>
            <th>Court name</th>
            <th>Assign Coach</th>
            <th>Add Student</th>
            <th></th>
        {data!==null && data.map(({ court_id,coach_id,court_name }) => {
              return (
                <tr key={court_id}>
                  <td>{court_id}</td>
                  <td>{coach_id}</td>
                  <td>{court_name}</td>
                  <td className={classes.operation}>

                    <input type="text" id={court_id} className={classes.userInput} placeholder="Assign coach" onChange={(e)=>setCoachId(e.target.value)}></input>
                    <button
                      id={court_id} className={classes.submitButton}
                      onClick={()=>{
                        assignCoach(court_id)
                      }}
                    >
                      submit
                    </button>
                  </td>
                  <td className={classes.operation}>

                    <input type="text" id={court_id} className={classes.userInput} placeholder="Student Id" onChange={(e)=>setStudent(e.target.value)}
></input>
                    <button
                      id={court_id} className={classes.submitButton}
                      onClick={()=>{
                        addStudent(court_id)
                      }}
                    >
                      Add
                    </button>
                  </td>
                  <td>
                  <button
                      id={court_id} className={classes.deleteButton}
                      onClick={()=>navigate('/admin/dashboard/court',{state:{court_id:court_id}})}
                    >
                      open court
                    </button>
                  </td>
                </tr>
              );
            })}
    <input type="text" id="inputcourt" placeholder="Add a court name" style={{marginTop:"1rem" }} onChange={(e)=>{setNewCourtName(e.target.value)}}></input>
        <button id="btncourt" className={classes.submitButton}
        onClick={addNewCourt}
        >Create Court</button>
          </div>
      </tbody>
      </table>
      </div>
    );    
  };


