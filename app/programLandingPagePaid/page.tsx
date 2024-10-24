import Navbar from '../../component/navbar';
import Hero from "@/component/hero";
import Partners from "@/app/programLandingPagePaid/partners";
import MidSection from "@/app/programLandingPagePaid/midSection";

export default function  Page() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Partners/>
            <MidSection/>
        </div>
    );
}