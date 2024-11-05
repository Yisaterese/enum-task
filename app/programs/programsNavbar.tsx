import React from 'react';
import Image from 'next/image';
import enumImage from '../../public/landingPagePaid/navbar/enumImage.png';
import { Icon } from '@iconify/react';
import Ellipse from '../../public/landingPagePaid/navbar/Ellipse.png';

export default function ProgramsNavbar() {
    return (
        <div className="border border-[#F9FDFF] pb-5">
            <div className="flex justify-between items-center mt-1 mx-[4%] ">
                {/* Left - Enum Image */}
                <Image src={enumImage} alt="Enum Image" className=" sm:w-auto sm:h-auto md:w-[80px] "  />

                {/* Center - Search Box */}
                <div className="relative flex items-center   md:w-1/2 lg:w-1/3">
                    <Icon icon="mynaui:search" className="absolute left-4 text-black w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-2 py-1 border rounded-lg text-black"
                    />
                </div>

                {/* Right - Notification, Profile, and Dropdown */}
                <div className="flex items-center space-x-4">
                    <Icon icon="iconoir:bell" className="text-[#292e48] sm:w-6 sm:h-6" width={30} height={30}  />
                    <Image src={Ellipse} alt="ellipse " className="w-8 h-8 sm:w-6 sm:h-6" />
                    <p className="text-black">Oyindamola</p>
                    <Icon icon="prime:chevron-down" className="text-[#292e48]" width={24} height={24} />
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap text-black justify-center items-center mx-auto gap-5 py-3 mt-4 w-full sm:mt-1 sm:w-[50vw] sm:gap-2 md:text-[13px] md:ml -2 md:pl-3">
                <div className="flex items-center gap-2 h-auto py-2 px-5 rounded-full border-2 sm:py-[2px] sm:px-2 sm:text-[10px] md:text-[15px]">
                    <p className="pb-0">Price</p>
                    <Icon icon="gg:chevron-down" className="my-1 text-black" />
                </div>
                <div className="flex items-center gap-2 h-auto py-2 px-5 rounded-full border-2 sm:py-[2px] sm:px-2 sm:text-[10px] md:text-[15px]">
                    <p>Application fees</p>
                    <Icon icon="gg:chevron-down" className="my-1" />
                </div>
                <div className="flex items-center gap-2 h-auto py-2 px-5 rounded-full border-2 sm:py-[2px] sm:px-2 sm:text-[10px] md:text-[15px]">
                    <p>Duration</p>
                    <Icon icon="gg:chevron-down" className="my-1" />
                </div>
                <p className="sm:text-[10px] md:text-[15px]">Reset Filters</p>
            </div>

        </div>
    );
}
