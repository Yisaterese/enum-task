import React from "react";
import Image from "next/image";
import leftArrow from "@/public/landingPagePaid/hero/leftArrow.png";
import semicolonLogo from "@/public/landingPagePaid/hero/semicolonLogo.png";
import heroImage from "@/public/landingPagePaid/hero/heroImage.png";

import {Icon} from '@iconify/react';
import Button from "@/component/button";

export default function Hero(){
    return (
        <div>
            <div className="flex" style={{height:'380px'}}>
                <div className={''} style={{backgroundColor: '#2938B6', width: '60%'}}>
                    <div className='flex ml-[50px] text-white ' style={{paddingTop:'24px',marginLeft: '7%', marginRight: '8%'}}>
                        <div className={`flex items-center `}>
                            <p>All Programs</p>
                        </div>
                        <div className={`flex items-center `}>
                            <Icon icon={'mi:chevron-right'} style={{width: '20px', height: '20px'}}/>
                            <p>Business Leadership</p>
                        </div>
                        <div className={`flex items-center `}>
                            <Icon icon={'mi:chevron-right'} style={{width: '20px', height: '20px'}}/>
                            <p>Programs Information</p>
                        </div>
                        <div className={`flex items-center `}>
                            <Icon icon={'mi:chevron-right'} style={{width: '20px', height: '20px'}}/>
                            <p>Program</p>
                        </div>
                    </div>

                    <div className='flex  p-2 pl-0' style={{marginLeft: '7%', marginTop:'10px'}}>
                        <Image src={leftArrow} alt='leftArrow'/>
                        <Button icon={leftArrow} word={'back'} className=''/>
                    </div>
                    <h1 className=' mt-6' style={{marginLeft: '7%', fontWeight: '600', fontSize: '30px', }}>Business
                        Leadership</h1>

                    <div className={' flex gap-5 mt-6'} style={{marginLeft: '7%'}}>
                        <Image src={semicolonLogo} alt='semicolonImage'/>
                        <div className={'mt-[10px]'}>
                            <p className='text-[12px]'>OFFERED BY</p>
                            <p className={'text-lg'}>Semicolon Africa</p>
                        </div>
                    </div>
                    <div className={' flex gap-4 p-3 pb-2 pl-0 '} style={{marginTop:'35px'}}>
                         <Button word={'Apply Now'} className='bg-white rounded h-[132px] text-black px-6 py-2 ml-[7%] text-sm '  />
                         <p  style={{marginTop:'10px' ,fontSize:'16px ',marginBottom:'5px',width:'265px',height:'21px'}}>5,000 students already enrolled</p>
                    </div>
                </div>
                <Image src={heroImage} alt={'heroImage'} className={'w-[40%]'}/>
            </div>
        </div>
    );
}

