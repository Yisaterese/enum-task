import React from 'react'
import Image from 'next/image';
import heroImage from '../../public/hero/heroImage.png';
import semicolonLogo from '../../public/hero/semicolonLogo.png';
import leftArrow from '../../public/hero/leftArrow.png';
import IconWithText from "@/component/iconWithText";
import rightArrow from '../../public/hero/rightArrow.png';
export default function HeroPage(){
    return(
        <div className='flex '>
            <div className='w-[60%] bg-blue-800 '>
                <div className='flex pb-2 pt-5 ml-[8%]'>
                    <IconWithText word='Programs' />
                    <IconWithText image={rightArrow} word='All Programs' />
                    <IconWithText image={rightArrow} word='Business Leadership'/>
                    <IconWithText image={rightArrow} word='Programs Information'/>
                </div>
                <div className='flex ml-[8%] p-3 pl-0'>
                    <Image src={leftArrow} alt='leftArrow'/>
                    <button>Back</button>
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
                    <button className='bg-white rounded text-black px-6 py-2  text-lg'>Apply Now</button>
                    <p className="  mt-2.5">5,000 students already enrolled</p>
                </div>
            </div>
            <Image src={heroImage} alt='heroImage' className='w-[40%] '/>
        </div>
    );
}