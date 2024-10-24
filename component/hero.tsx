import rightArrow from "@/public/landingPagePaid/hero/rightArrow.png";
import Image from "next/image";
import leftArrow from "@/public/landingPagePaid/hero/leftArrow.png";
import semicolonLogo from "@/public/landingPagePaid/hero/semicolonLogo.png";
import heroImage from "@/public/landingPagePaid/hero/heroImage.png";
import React from "react";
import IconWithText from "@/component/iconWithText";
import Button from "@/component/button";

const Hero=()=>{
    return (
        <div className='flex mt-6   '>
            <div className='w-[60%] bg-blue-800 '>
                <div className='flex pb-2 pt-5 ml-[8%]'>
                    <IconWithText word='Programs'/>
                    <IconWithText image={rightArrow} word='All Programs'/>
                    <IconWithText image={rightArrow} word='Business Leadership'/>
                    <IconWithText image={rightArrow} word='Programs Information'/>
                </div>
                <div className='flex ml-[8%] p-3 pl-0'>
                    <Image src={leftArrow} alt='leftArrow'/>
                    <Button icon={leftArrow} word={'back'} className=''/>
                </div>
                <h1 className='ml-[8%] font-semibold  text-4xl mt-8'>Business Leadership</h1>
                <div className={'ml-[8%] flex gap-5 mt-8'}>
                    <Image src={semicolonLogo} alt='semicolonImage'/>
                    <div className={'mt-[10px]'}>
                        <p className='text-[12px]'>OFFERED BY</p>
                        <p className={'text-lg'}>Semicolon Africa</p>
                    </div>
                </div>

                <div className={'ml-[8%] flex gap-4 mt-12 p-3 pl-0 '}>
                    <Button word={'Apply Now'} className='bg-white rounded text-black px-6 py-2  text-lg'/>
                    <p className="  mt-2.5">5,000 students already enrolled</p>
                </div>
            </div>
            <Image src={heroImage} alt='heroImage' className='w-[40%] '/>
        </div>
    );
}

export default Hero;