import React from 'react';
import ButtonProps from '../../component/button';
export default function MidSection(){
    return(
        <div className={'flex'}>
            <div className={'w-[70%]'}>
                <div className={'flex gap-3 text-black ml-[7%]'}>
                    <p>About</p>
                    <p>Program goals</p>
                    <p>Program benefits</p>
                    <p>Courses</p>
                </div>
                <div className={'ml-[7%] m-4'}>
                    <h1 className={'text-black text-lg font-bold'}>About Program</h1>
                    <div className={'text-black text-xs mt-3 '}>
                        This course examines important issues in corporate finance from the perspectives of financial
                        managers
                        who make important investment decisions and financing decisions. This course incorporates an
                        element
                        of financial modelling in teaching and assessments.
                    </div>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Program goals</h1>
                    <div className={'text-black text-xs mt-3 '}>
                        <h2>What you are expected to know after this course</h2>
                        <ul>Understand forms of market imperfections and their implications for financial managers</ul>
                        <ul>Generate a valuation range for a project or a company</ul>
                        <ul>Apply option theories to solve corporate finance problems</ul>
                        <ul>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                        </ul>
                        <ul>Understand various forms of market imperfections and their implications for financial</ul>
                        <ul>Generate a valuation range for a project or a company</ul>
                        <ul>Apply option theories to solve corporate finance problems</ul>
                        <ul>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                        </ul>
                    </div>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Courses</h1>
                    <h2 className={'text-black text-xs mt-3 '}>There are 7 courses in this program</h2>

                    <div className={'flex pt-8'}>
                        <h1 className={'text-black text-lg font-bold m-6 mb-2 ml-0'}>Course 1 . </h1><span
                        className={'text-black text-thin  m-6 mb-2 ml-0'}> Credit unit</span>
                    </div>
                    <h2 className={'text-black text-lg font-bold border-b-4'}>Business Ethics</h2>
                    <h1>Description</h1>
                </div>
            </div>

            <div className={'w-[30%]'}>
                <div className={'rounded mt-4 ml-5 mr-6'} >
                    <div className={''} style={{color:'#b3e2ef'}} >

                        <div>
                            {/*<ButtonProps word={'Apply Now'} className={'bg-blue-700 rounded '}/>*/}
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}