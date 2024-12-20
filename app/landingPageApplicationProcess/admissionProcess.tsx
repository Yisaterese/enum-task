
import React from 'react';
import Rating from '../../component/rating';
import AssessmentProcess from "../../component/assessmentProcess";
import info from '../../public/landingPageApplicationProcess/info.png';
import Navbar from "../../component/navbar";
import Hero from "../../component/hero";
import Partners from "../../component/partners";
export default function AdmissionProcess(){
    return(
        <div >
            <Navbar/>
            <Hero heroBackButton={'/submitAssessment'}
                  path={'/landingPageAdmissionGranted'}
                  buttonText={'Processing your Application'}/>
            <Partners/>
            <AssessmentProcess image={info} text={'Processing your Application'}   />
            <div className={'flex border-t-2 mt-4'}>
                <div className={'w-[68%] border-r-2 '}>
                    <div className={'flex gap-3 mt-[50px] text-black ml-[7%]'}>
                        <p>About</p>
                        <p>Program goals</p>
                        <p>Program benefits</p>
                        <p>Courses</p>
                    </div>
                    <div className={'ml-[7%] mt-[50px] m-4 mr-[8%] '}>
                        <h1 className={'text-black text-lg font-bold'}>About Program</h1>
                        <div className={'text-black text-xs mt-3 '}>
                            This course examines important issues in corporate finance from the perspectives of
                            financial
                            managers
                            who make important investment decisions and financing decisions. This course incorporates an
                            element
                            of financial modelling in teaching and assessments.
                        </div>
                        <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Program goals</h1>
                        <div className={'text-black text-xs mt-3 pb-5 '}>
                            <h2 className={'mb-3 text-m font-semibold'}>What you are expected to know after this
                                course</h2>
                            <li>Understand forms of market imperfections and their implications for financial managers
                            </li>
                            <li>Generate a valuation range for a project or a company</li>
                            <li>Apply option theories to solve corporate finance problems</li>
                            <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                            </li>
                            <li>Understand various forms of market imperfections and their implications for financial
                            </li>
                            <li>Generate a valuation range for a project or a company</li>
                            <li>Apply option theories to solve corporate finance problems</li>
                            <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                            </li>
                        </div>

                    </div>
                </div>

                <div className={'w-[30%] pt-8 pl-4 pr-10'}>
                    <Rating applicationFee={'Paid'} programFee={'₦840,000.00'} button={'Processing your Application'}
                            classname={'text-[14px]'} link={''}/>
                </div>
            </div>

        </div>
    );
}