import Navbar from "@/app/programLandingPage/navbar";
import HeroPage from "@/app/programLandingPage/hero";
import Partners from "@/app/programLandingPage/partners";
import MidSection from "@/app/programLandingPage/midSection";

export default function  Page() {
    return(
        <div>
            <Navbar/>
            <HeroPage/>
            <Partners/>
            <MidSection/>
        </div>
    );
}