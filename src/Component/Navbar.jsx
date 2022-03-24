import { useContext } from "react"
import { IsAuthContext } from "../Context/IsAuthConextProvider"
export const Navbar=()=>{
    const {authhandle}=useContext(IsAuthContext)
    return <div id="navbar">
            <div><button onClick={()=>{
                authhandle("False")
                alert("Log out")
            }}>Logout</button></div>
    </div>
}