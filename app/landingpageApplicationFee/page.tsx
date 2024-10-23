import ApplicationFeeNavbar from "@/app/landingpageApplicationFee/navbar";
import ApplicationFeeHeroPage from "@/app/landingpageApplicationFee/hero";
import Partners from "@/component/partners";
import ApplicationFeeMidsection from "@/app/landingpageApplicationFee/midsection";

export default function Page(){
    return(
        <div>
            <ApplicationFeeNavbar/>
            <ApplicationFeeHeroPage/>
            <Partners/>
            <ApplicationFeeMidsection/>
        </div>

    );
}