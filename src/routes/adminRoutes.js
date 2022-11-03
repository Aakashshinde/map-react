import { useEffect } from "react";
import {Link,useNavigate} from "react-router-dom";
import {useAuth} from './../components/auth';
import Roles from './setRoles';
    export const AdminRoute = (props) =>{
    const {Component} = props;
    const navigate = useNavigate();
    const auth = useAuth();
    useEffect(()=>{
        console.log(auth);
        if(auth.role!=="5001")
            navigate('/login');
    },[])

    return(
        <div>
            <Component />
        </div>
    )
}

export default AdminRoute;