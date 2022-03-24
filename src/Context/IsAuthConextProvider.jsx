import { createContext, useState } from "react";

export const IsAuthContext=createContext()

export const IsAuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState("False")
    const authhandle=(val)=>{
        setIsAuth(val)
    }
    return <IsAuthContext.Provider value={{isAuth,authhandle}}>{children}</IsAuthContext.Provider>
}