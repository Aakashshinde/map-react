import React, { useEffect, useState } from "react";
import api from "../api/api";
import classes from '../styles/Table.module.css';
export const CoachDetails = (props) =>{
 const data = props.props;
 console.log(data);
    return (
      <div>
        <table className={classes.usersTable}>
        <tbody>
            <div>
            <th>coach Id</th>
            <th>court Id</th>
        {data!=null && data.map(({ coach_id,court_id }) => {
              return (
                <tr key={coach_id}>
                  <td>{coach_id}</td>
                  <td>{court_id}</td> 
                </tr>
              );
            })}
          </div>
     
      </tbody>
      </table>
      </div>
    );
  };


