
import React from 'react';
import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Partners from "@/component/partners";
import AdmissionGranted from "@/app/landingPageAddmission/admissiion";
export default function Page() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Partners/>
            <AdmissionGranted/>
        </div>
    );
}