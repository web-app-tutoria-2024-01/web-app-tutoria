import { createContext, useEffect, useState } from "react";
import steps from '../db/steps.json'
import types from '../db/types.json'

export const globalContext = createContext({})

export const GlobalProvider = props => {
   const [step, setStep] = useState([...steps])
   const [type, setTypes] = useState([...types])

   useEffect(() => {
      setStep([...steps])
      setTypes([...types])
   }, [])
   return (
      <globalContext.Provider value={{step, type}}>
         {props.children}
      </globalContext.Provider>
   )
}