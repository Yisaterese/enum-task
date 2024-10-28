import React from 'react';
import Navbar from "../../component/navbar";
import Hero from "../../component/hero";
import Partners from "../../component/partners";
import Instructions from "../../component/intsructions";
import Button from "../../component/button";
import checkbox from '../../public/takeAssessment/checkbox.png';
import Image from 'next/image';
export default function TakeAssessmentClicked() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Partners/>
            <div>
                <div className='my-8 text-black'>
                    <div className='mx-[300px]'>
                        <p className='font-[800]'>Business Management Application Assessment</p>
                        <Instructions/>
                        <div className='mb-7'>
                            <p className='text-[15px] font-bold mb-3'>Test Instructions</p>
                            <p>Attempt all Questions</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={checkbox} alt='checkbox' className='w-[24px] h-[24px]' />
                            <p className='mt-1 font-bold text-[12px]'>I have read and understood all the instructions
                                above</p>
                        </div>
                        <Button word='Begin Assessment'
                                className='text-[14px] mr-[31rem] bg-[#008EEF] text-white border-2 text-[D0DCEA] rounded-lg py-2 my-5 px-5'/>
                    </div>
                </div>
            </div>
        </div>
    );
}