import React, { useEffect, useState } from "react";
import api from "../api/api";
import classes from '../styles/Table.module.css';
export const AdminDetails = (props) =>{
    const [data,setData] = useState(null); 
   const [newCourtName,setNewCourtName] = useState(null);
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
        
        {data!==null && data.map(({ court_id,coach_id,court_name }) => {
              return (
                <tr key={court_id}>
                  <td>{court_id}</td>
                  <td>{coach_id}</td>
                  <td>{court_name}</td>
                  <td className={classes.operation}>

                    <input type="text" id={court_id} placeholder="Assign coach"></input>
                    <button
                      id={court_id} className={classes.usersButton}
                      onClick={() => {
                      }}
                    >
                      submit
                    </button>
                  </td>
                </tr>
              );
            })}
    <input type="text" id="inputcourt" placeholder="Add a court name" onChange={(e)=>{setNewCourtName(e.target.value)}}></input>
        <button id="btncourt" className={classes.usersButton}
        onClick={addNewCourt}
        >Create Court</button>
          </div>
        
     
      </tbody>
      </table>
      </div>
    );
  };


