import Navbar from "@/component/navbar";
import HeroPage from "@/app/programLandingPagePaid/hero";
import Partners from "@/app/programLandingPagePaid/partners";
import MidSection from "@/app/programLandingPagePaid/midSection";
export default function Page(){
    return(
      <div>
          <Navbar/>
          <HeroPage/>
          <Partners/>
          <MidSection/>
      </div>
    );
}


