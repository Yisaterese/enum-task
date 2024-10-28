import Navbar from "../../component/navbar";
import React from "react";
import Payment from "../../app/applicationFeePayment/payment";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <Payment/>
        </div>
    );
}