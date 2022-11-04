// import React, { useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import StudentNav from './navbar';
// import api from "../api/api";
// import { useState } from 'react';

// export const StudentDashboard = () =>{
    
//   const [isCoach,setIsCoach] = useState(null);
//     async function getAttendance(){
//         try{
//             const response = await api.post('/get');
            
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
    

//     useEffect(()=>{
//         getAttendance();
//         const role=localStorage.getItem('role');
//     if(role=="2001")
//      setIsCoach(true);
//     },[])
//     return(
//         isCoach &&
//         <>
//         <StudentNav/>
//          <Container>
        
//     </Container>
//     </>
    
//     )
// }
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api";
import classes from '../styles/Table.module.css';
import StudentNav from "./navbar";
import Footer from "./footer";


export const StudentDashboard = () => {
  const [userId, setUserId] = useState(null); // change it
  const [status, setStatus] = useState("true");
  const [data, setData] = useState([]);
  useEffect(() => {
    const userid = localStorage.getItem('userId');
    setUserId(userid);
    // getAttendance();
  });
  
  async function getAttendance(e){
    try{
       const response = await api.post('/getAttendance',{userId:userId});
        setData(response.data.attendance);    
    }
                catch(e){
                    console.log(e)
                }
  };

  return (
    <div>
        <StudentNav/>
      <button onClick={getAttendance} className={classes.submitButton} style={{
                            color: "black",
                            height: "4rem",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            width: "10rem",
                            marginTop: "3rem",
                            marginLeft: "3rem"
                          }}> get attendance </button>
      <div>
        <table className={classes.usersTable}>
          <tbody>
            <th>Date</th>
            <th>Status</th>

            {data !== null &&
              data.map(({ date, status }) => {
                let s = date.substr(0,10)
                if(status === 'true'){
                  status = 'present';
                }
                return (
                  <tr key={s}>
                    <td>{s}</td>
                    <td>{status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};
