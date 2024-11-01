import Image from "next/image";
import React, {useState} from "react";
import enumImage from '../public/landingPagePaid/navbar/enumImage.png';
import {AssessmentNavbarProps} from "../types/types";
import Link from "next/link";


const AssessmentNavbar:React.FC<AssessmentNavbarProps> =({link})=>{
    const [styling , setStyling] = useState<boolean>(false)
    const changeColor =()=>{
            setStyling(!styling)
    }
    return (
        <div className='p-0.5 border-2 py-4 ' style={{padding:'24px'}}>
            <div className='flex justify-between mt-1 ml-[4%] mr-[4%]  '>
                <Image src={enumImage} alt='Enum Image' className=''/>
                <Link href={link} className={`p-[10px_5px] ${!styling?'text-blue-500 rounded border border-blue-500 py-2 px-6': `${styling}`}`} onClick={changeColor}>cancel</Link>
            </div>
        </div>
    );
}

export default AssessmentNavbar;