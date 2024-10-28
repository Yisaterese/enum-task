import React from 'react';
import Navbar from "../../component/navbar";
import Payment from "../makePaymentProgram/makePaymentProgram";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <Payment/>
        </div>
    );
}