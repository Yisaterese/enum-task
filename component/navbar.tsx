import Image from "next/image";
import {Icon} from "@iconify/react";
import React from "react";
import enumImage from '../public/navbar/enumImage.png';
import Ellipse from '../public/navbar/ellipse.png';


const Navbar =()=>{
    return (
        <div className='p-1'>
            <div className='flex justify-between mt-1 ml-[4%] mr-[4%] mb-5 '>
                <Image src={enumImage} alt='Enum Image' className=''/>
                <div className='relative flex items-center'>
                    <Icon icon="mynaui:search" className={'absolute left-[285px] m-2 w-4 text-black'}/>
                    <input type="text" placeholder={'Search'}
                           className=" p-1.5 pl-10 ml-[280px] pr-[120px] border rounded-lg"/>
                </div>
                <div className='flex pl-[160px]'>
                    <div className={' m-2'}>
                        <Icon icon="iconoir:bell" style={{color: '#292e48'}} width={30} height={30}/>
                    </div>
                    <Image src={Ellipse} alt='ellipse' className='m-[8px]'/>
                    <p className={'text-thin text-black text-center justify-center m-[10px]'}>Oyindamola</p>
                    <Icon icon="prime:chevron-down" className={'m-[6px] '} style={{color: '#292e48'}} width={35}
                          height={35}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;