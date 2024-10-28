import React from "react";
import Image from "next/image";
import leftArrow from "../public/landingPagePaid/hero/leftArrow.png";
import semicolonLogo from "../public/landingPagePaid/hero/semicolonLogo.png";
import heroImage from "../public/landingPagePaid/hero/heroImage.png";
import { Icon } from '@iconify/react';
import Button from "../component/button";

const Hero = () => {
    return (
        <div className="flex  lg:flex-row" style={{ height: 'auto', minHeight: '380px' }}>
            <div className="w-full lg:w-[60%]" style={{ backgroundColor: '#2938B6' }}>
                <div className={` flex xsm:text-[8px] flex-wrap ml-[5%] lg:ml-[50px] text-white mt-4 lg:mt-6 px-[8%] lg:px-0`}>
                    <div className="flex items-center mr-2">
                        <p>All Programs</p>
                    </div>
                    <div className="flex items-center mr-2">
                        <Icon icon="mi:chevron-right" className="w-5 h-5" />
                        <p className="ml-1">Business Leadership</p>
                    </div>
                    <div className="flex items-center mr-2">
                        <Icon icon="mi:chevron-right" className="w-5 h-5" />
                        <p className="ml-1">Programs Information</p>
                    </div>
                    <div className="flex items-center mr-2">
                        <Icon icon="mi:chevron-right" className="w-5 h-5" />
                        <p className="ml-1">Program</p>
                    </div>
                </div>

                <div className="flex items-center p-2 mt-4 ml-[5%] lg:ml-[7%]">
                    <Image src={leftArrow} alt="leftArrow" />
                    <Button icon={leftArrow} word="back" className="ml-2" />
                </div>

                <h1 className="text-[24px] lg:text-[30px] font-semibold ml-[5%] lg:ml-[7%] mt-4 lg:mt-6">
                    Business Leadership
                </h1>

                <div className="flex items-center gap-4 ml-[5%] lg:ml-[7%] mt-4">
                    <Image src={semicolonLogo} alt="semicolonImage" />
                    <div className="mt-1">
                        <p className="text-[10px] lg:text-[12px]">OFFERED BY</p>
                        <p className="text-base lg:text-lg">Semicolon Africa</p>
                    </div>
                </div>

                <div className="flex items-center pb-3 gap-4 ml-[5%] lg:ml-[7%] mt-6">
                    <Button word="Apply Now" className="bg-white rounded p-2 h-[48px] lg:h-[132px] text-black px-4 lg:px-6 py-2 text-sm" />
                    <p className="mt-2 text-[14px] lg:text-[16px] w-[200px] lg:w-[265px] h-[21px]">
                        5,000 students already enrolled
                    </p>
                </div>
            </div>

            <div className="w-full mt-4 lg:w-[40%] lg:mt-0">
                <Image src={heroImage} alt="heroImage" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default Hero;
