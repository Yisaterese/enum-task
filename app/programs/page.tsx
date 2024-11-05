import React from 'react';
import Programs from "../../component/programs/programs";
import ProgramsNavbar from "@/app/programs/programsNavbar";

export default function page(){
    return(
        <div>
            <ProgramsNavbar/>
            <Programs/>
        </div>
    );
}