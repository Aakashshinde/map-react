import React, { useEffect, useState } from "react";
import api from "../api/api";
import classes from "../styles/Table.module.css";
export const StudentDetails = (props) =>{
 const [data,setData] = useState(null);    
     async function getStudents(){
        try{
            const response = await api.post('/getStudentDetails');
            setData(response.data.students);
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getStudents();
    })

  async function makeCoach(user_id){
        // e.preventDefault();
        // console.log(user_id)
        try{
          console.log(user_id)
            const response = await api.post('/convertToCoach',{userId:user_id});
                 }
        catch(err){
            console.log(err)
        }
    }
    return (
      <div>
        <table className={classes.usersTable}>
        <tbody>
            <div>
            <th>user Id</th>
            <th>user Name</th>
            <th>user email</th>
            <th></th>
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
                      onClick={()=>{
                        makeCoach(user_id)
                      }}
                    >
                      make Coach
                    </button>
                  </td>
                </tr>
              );
            })}
          </div>
     
      </tbody>
      </table>
      </div>
    );
  };


