import Navbar from '../../component/navbar';
import Hero from "../../component/hero";
import Partners from "../../app/programLandingPagePaid/partners";
import MidSection from "../../app/programLandingPagePaid/midSection";

export default function  ProgramLandingPagePaid() {
    return(
        <div>
            <Navbar/>
            <Hero path={'/landingpageApplicationFee'} buttonText={'Apply Now'}/>
            <Partners/>
            <MidSection/>
        </div>
    );
}