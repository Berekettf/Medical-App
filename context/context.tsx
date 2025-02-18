
"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface IOnBoardingContext {
  truckingNumber: string;
  setTruckingNumber: (value: string) => void;
  setDoctorProfileId: (value: string) => void; //
  doctorProfileId: string;
  
}

const intialData ={
  truckingNumber: "",
  doctorProfileId: "",
  setTruckingNumber: ()=>{},
  setDoctorProfileId: ()=>{}, //
}

const OnBoardingContext = createContext<IOnBoardingContext >(intialData)

export function OnBoardingContextProvider({
  children,
}: {
  children:ReactNode;
}) {
  const [truckingNumber, setTruckingNumber] = useState("JAM1UZXG");
  const [doctorProfileId, setDoctorProfileId] = useState("6704d281ba5ff7de630f2141");
  const contextValues = {
    truckingNumber,
    setTruckingNumber,
    doctorProfileId,
    setDoctorProfileId,
  };
  return <OnBoardingContext.Provider value={contextValues}>
    {children}
  </OnBoardingContext.Provider>;
}

export function useOnBoardingContext(){
  return useContext(OnBoardingContext)
}

export default OnBoardingContext;
