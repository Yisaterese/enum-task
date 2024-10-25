import React from 'react';
import Programs from "@/component/programs";
import Navbar from "@/component/navbar";
import ProgramPage from "@/app/programs/programs";

export default function page(){
    return(
        <div>
            <Navbar/>
            <ProgramPage/>
            <Programs/>
        </div>
    );
}