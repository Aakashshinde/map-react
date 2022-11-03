// import { createContext, useContext, useState } from "react";
// const AuthContext = createContext(null);

// export const AuthProvider = ({children}) => {
//     const [username,setUsername] = useState(null);
//     const [role,setRoles] = useState(null);
//     const [userId,setUserId] = useState(null);
    
//     const login = (user) => {
//         setUsername(user.username);
//         setRoles(user.roles);
//         setUserId(user.userId);
//         console.log(username);
//      }
//     const logout = () =>{
//         setUsername(null);
//         setRoles(null);
//         setUserId(null);
//     }

//     return( <AuthContext.Provider value={{username,login,logout,role,userId}}>
//         {children}
//     </AuthContext.Provider>
//     )
// }

// export const useAuth = () =>{
//     return useContext(AuthContext);
// }

