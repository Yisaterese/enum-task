import instructorImage from '@/public/landingPagePaid/midSection/instructorImage.png';
import liveVideoImage from '@/public/landingPagePaid/midSection/liveVideoImage.png';
import {Icon} from '@iconify/react';
import React from 'react';
import Image from 'next/image';
import Rating from '../../component/rating';

export default function MidSection(){
    return(
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
                        This course examines important issues in corporate finance from the perspectives of financial
                        managers
                        who make important investment decisions and financing decisions. This course incorporates an
                        element
                        of financial modelling in teaching and assessments.
                    </div>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Program goals</h1>
                    <div className={'text-black text-xs mt-3 '}>
                        <h2 className={'mb-3 text-m font-semibold'}>What you are expected to know after this course</h2>
                        <li>Understand forms of market imperfections and their implications for financial managers</li>
                        <li>Generate a valuation range for a project or a company</li>
                        <li>Apply option theories to solve corporate finance problems</li>
                        <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                        </li>
                        <li>Understand various forms of market imperfections and their implications for financial</li>
                        <li>Generate a valuation range for a project or a company</li>
                        <li>Apply option theories to solve corporate finance problems</li>
                        <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis
                        </li>
                    </div>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Courses</h1>
                    <h2 className={'text-black text-xs mt-3 '}>There are 7 courses in this program</h2>
                    <div className={'flex pt-8'}>
                        <h1 className={'text-black text-lg font-bold m-6 mb-2 ml-0'}>Course 1 . </h1><span
                        className={'text-black text-thin  m-6 mb-2 ml-0'}> Credit unit</span>
                    </div>
                    <h2 className={'text-black text-lg font-bold border-b-2'}>Business Ethics</h2>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Description</h1>
                    <h2 className={'text-black text-xs mt-3 '}>
                        This course examines important issues in corporate finance from the perspectives of financial managers
                        who make important investment decisions and financing decisions. This course incorporates an element
                        of financial modelling in teaching and assessments.
                    </h2>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0'}>Objectives</h1>
                    <h2 className={'text-black text-xs mt-3 '}>
                        This course examines important issues in corporate finance from the perspectives of financial managers
                        who make important investment decisions and financing decisions. This course incorporates an element
                        of financial modelling in teaching and assessments.
                    </h2>
                    <h1 className={'text-black text-lg font-bold m-6 mt-[50px] ml-0 mb-3'}>Instructor</h1>
                    <div className={'flex gap-2'}>
                        <Image src={instructorImage} alt={'instructorImage'}/>
                        <div className={'flex-col     '}>
                            <h1 className={'text-black text-lg'}>Olamide Adebisi,PH.D.</h1>
                            <h2 className={'text-black text-xs'}>Henley Business School • Head Professor </h2>
                        </div>
                    </div>
                    <h2 className={'text-black text-xs mt-3 '}>Olamide taught Donald Trump in Kindergarten. She has 25 years experience teaching presidents design related courses. She has a PhD in Education management
                        and is a member of faculty at the Henley Business School.
                    </h2>
                    <div>
                        <h1 className={'text-black text-lg font-bold m-6 ml-0 mt-[50px]'}>Instructor’s Introductory
                            Message</h1>
                        <h2 className={'text-black text-xs mt-3 '}>Here’s a message from the instructor. Click play to
                            watch it.</h2>
                    </div>
                    <h1 className={'text-black text-lg font-bold m-6 ml-0 mt-[50px]'}>Instructor’s Introductory
                        Message</h1>
                    <h2 className={'text-black text-xs mt-3 mb-2'}>Here’s a message from the instructor. Click play to watch it.</h2>
                    <Image src={liveVideoImage} alt={'liveVideoImage'} className={''}/>
                    <div className={'mt-[50px]'}>
                        <h1 className={'text-black text-lg font-bold m-6 ml-0 bg-[#FBFBFB]'}>Modules</h1>
                        <div className={'mb-5 ml-5 bg-[#FBFBFB] mr-[350px] flex justify-between'}>
                            <h1 className={'text-blue-500 '}>Module 1 </h1>
                            <Icon icon="stash:chevron-down" className={' text-black w-8 h-8 '}/>
                        </div>
                        <div className={'bg-[#FBFBFB]  '}>
                            <h1 className={'mb-3 text-sm font-m text-black ml-5 pt-2'}>At the end of the module, the learner
                                should:
                            </h1>
                            <div className={'text-black text-xs m-6 ml-5 pb-1'}>
                                <li className={'m-6 ml-0'}>Understand various forms of market imperfections and their
                                    implications for financial
                                    managers
                                </li>
                                <li className={'m-6 ml-0'}>Generate a valuation range for a project or a company
                                </li>
                                <li className={'m-6 ml-0'}>Apply option theories to solve corporate finance problems
                                </li>
                                <li className={'m-6 ml-0'}> Use Excel to conduct a simple DCF analysis, regression
                                    analysis and sensitivity
                                    analysis
                                </li>
                            </div>
                        </div>

                        <div>
                            <p className={'text-black text-m m-10 mb-4 ml-5'}>Sessions</p>
                            <div className={'rounded bg-[#FBFBFB]'}>
                                <div className={'flex justify-between ml-5'}>
                                    <div className={'flex-col w-[40%]'}>
                                        <h2 className={'text-black text-xs my-2 '}>SESSION 1</h2>
                                        <h1 className={'text-black text-lg '}>How International Business Bloom</h1>
                                    </div>
                                    <div className={'w-[25%] flex  gap-2'}>
                                        <h1 className={'text-black align-center justify-center'}>0% Complete</h1>
                                        <h1 className={' text-black font-bold w-3 align-center justify-center'}>-</h1>
                                    </div>
                                </div>
                                <div className={'ml-5 text-black m-8 mb-2'}>
                                    <h1 className={'my-2 '}>Description</h1>
                                    <h2 className={'text-xs'}>This course examines important issues in corporate finance
                                        from the perspectives of financial
                                        managers who make important investment decisions and financing decisions.
                                        This </h2>
                                </div>
                                <p className={'text-blue-500 mx-5 text-xs '}>See more</p>
                                <h1 className={'border-b-2  ml-5 my-6'}></h1>
                                <p className={'text-black ml-5 '}>Learning Activities</p>
                                <div className={'ml-7 text-black my-5'}>
                                    <div className={'flex gap-2'}>
                                        <h1 className={'font-semibold-[500]'}>Video: </h1>
                                        <p className={'text-xs m-1 ml-0'}>Introduction to Module</p>
                                    </div>
                                    <div className={'text-black flex gap-2 text-xs my-1'}>
                                        <Icon icon="bitcoin-icons:clock-outline" className={'w-4 h-4'}/>
                                        <p>3 mins</p>
                                    </div>
                                </div>
                                <h1 className={'border-b-2  ml-5 '}></h1>
                                <div className={'ml-7 text-black my-5'}>
                                    <div className={'flex gap-2'}>
                                        <h1 className={'font-semibold-[500]'}>Reading: </h1>
                                        <p className={'text-xs m-1 ml-0'}>Learning Content 1</p>
                                    </div>
                                    <div className={'text-black flex gap-2 text-xs my-1'}>
                                        <Icon icon="bitcoin-icons:clock-outline" className={'w-4 h-4'}/>
                                        <p>3 mins</p>
                                    </div>
                                </div>
                                <h1 className={'border-b-2  ml-5 '}></h1>
                                <div className={'ml-7 text-blue-500 my-5'}>
                                    <div className={'flex gap-2'}>
                                        <h1 className={'font-semibold-[500]'}>Video: </h1>
                                        <p className={'text-xs m-1 ml-0'}>Learning Content 2</p>
                                    </div>
                                    <div className={'flex gap-2 text-xs my-1'}>
                                        <Icon icon="bitcoin-icons:clock-outline" className={'w-4 h-4'}/>
                                        <p>3 mins</p>
                                    </div>
                                </div>
                                <h1 className={'border-b-2  ml-5 '}></h1>
                                <div className={'ml-7 text-black my-5'}>
                                    <div className={'flex gap-2'}>
                                        <h1 className={'font-semibold-[500]'}>Audio: </h1>
                                        <p className={'text-xs m-1 ml-0'}>Learning Content 2</p>
                                    </div>
                                    <div className={'text-black flex gap-2 text-xs my-1'}>
                                        <Icon icon="bitcoin-icons:clock-outline" className={'w-4 h-4'}/>
                                        <p>3 mins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={''}>
                            <div className={'bg-[#FBFBFB] py-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div>
                                            <p className={'text-xs'}>SESSION 2</p>
                                            <p className={'font-medium'}>Introduction to Accounting</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#FBFBFB] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div>
                                            <p className={'text-xs'}>SESSION 3</p>
                                            <p className={'font-medium'}>Prezi Presentation Tool</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#FBFBFB] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div>
                                            <p className={'text-xs'}>SESSION 4</p>
                                            <p className={'font-medium'}>Introduction to Business Law</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#FBFBFB] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div>
                                            <p className={'text-xs'}>SESSION 5</p>
                                            <p className={'font-medium'}>Excel Tool</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#FBFBFB] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div>
                                            <p className={'text-xs'}>SESSION 6</p>
                                            <p className={'font-medium'}>Power BI</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#F6FCFF] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div className={'text-black '}>
                                            <div className={'flex gap-2'}>
                                                <h1 className={'font-semibold-[500]'}>Course 2 </h1>
                                                <p className={'text-xs m-1 ml-0'}>• 4 Credit Units</p>
                                            </div>
                                            <p className={'font-medium'}>Design management</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#F6FCFF] py-3 my-3'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div className={'text-black '}>
                                            <div className={'flex gap-2'}>
                                                <h1 className={'font-semibold-[500]'}>Course 3 </h1>
                                                <p className={'text-xs m-1 ml-0'}>• 4 Credit Units</p>
                                            </div>
                                            <p className={'font-medium'}>Business Leadership</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-[#F6FCFF] py-3 my-3 mb-[100px]'}>
                                <div className={'text-black ml-5    '}>
                                    <div className={'flex justify-between'}>
                                        <div className={'text-black '}>
                                            <div className={'flex gap-2'}>
                                                <h1 className={'font-semibold-[500]'}>Course 4 </h1>
                                                <p className={'text-xs m-1 ml-0'}>• 2 Credit Units</p>
                                            </div>
                                            <p className={'font-medium'}>Color Theory</p>
                                        </div>
                                        <p className={'border-[1.5px] rounded w-6 h-7 m-3 pt-0.5'}>
                                            <Icon icon="clarity:plus-line" className={'m-0.5'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


                <div className={'w-[30%] pt-8 pl-4 pr-10 cursor-pointer'}>
                    <Rating
                        applicationFee={'₦10,000.00'}
                        programFee={'₦840,000.00'}
                        button={'Apply Now'}
                        classname={''}  link={'programLandingpagePaid'}/>
                </div>
        </div>
    );
}