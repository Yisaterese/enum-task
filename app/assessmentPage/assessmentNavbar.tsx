import Image from "next/image";
import React from "react";
import enumImage from '../../public/landingPagePaid/navbar/enumImage.png';
import Button from "../../component/button";


const AssessmentNavbar =()=>{
    return (
        <div className='p-0.5 border-2 py-4 ] '>
            <div className='flex justify-between mt-1 ml-[4%] mr-[4%]  '>
                <Image src={enumImage} alt='Enum Image' className=''/>
                <Button word={'Cancel'} className={'text-blue-500 rounded border border-blue-500 py-2 px-6'}/>
            </div>
        </div>
    );
}

export default AssessmentNavbar;