import { useState } from "react"

type AuthUser ={
    name:string
    email:string
}

// export const User =()=>{
//     const [user, setUser] = useState<AuthUser>({}as AuthUser)
//     const handleLogin = () =>{
//         setUser({
//             name:'Johnny',
//             email:'johnny@gmail.com'
//         })
//     }
  
//     return(
//         <div>
//             <button onClick={handleLogin} >Login</button>
           
//             <div>User name is {user?.name} </div>
//             <div>User email is {user?.email} </div>
//         </div>
//     )
// }




export const User =()=>{
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () =>{
        setUser({
            name:'Johnny',
            email:'johnny@gmail.com'
        })
    }
    const handleLogout = () =>{
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button> 
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </div>
    )
}
