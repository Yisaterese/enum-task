    import Image from "next/image";
    import {Icon} from "@iconify/react";
    import React from "react";
    import enumImage from '../public/landingPagePaid/navbar/enumImage.png';
    import Ellipse from '../public/landingPagePaid/navbar/Ellipse.png';


    const Navbar =()=>{
        return (
            <div className=' border border-[#F9FDFF] '  style={{paddingBottom:'20px'}}>
                <div className='flex justify-between mt-1 ml-[4%] mr-[4%]  '>
                    <Image src={enumImage} alt='Enum Image' className=''/>

                    <div className='relative flex items-center ' style={{paddingLeft:'50px' ,paddingRight:'100px'}}>
                        <Icon icon="mynaui:search" style={{
                            position:'absolute',
                            left:'335px',
                            margin:'8px',
                            width:'16px',
                            color:'black'
                        }}
                        />
                        <input type="text" placeholder={'Search'} style={{
                            width:'100%',
                            padding:'6px',
                            paddingLeft:'40px',
                            marginLeft:'280px',
                            paddingRight:'128px',
                            borderRadius:'8px',
                            borderWidth:'1px',
                            color:'black'
                        }} />
                    </div>

                    <div className='flex pl-[160px]'>
                        <div className={' m-2'}>
                            <Icon icon="iconoir:bell" style={{color: '#292e48',}} width={30} height={30}/>
                        </div>
                        <Image src={Ellipse} alt='ellipse' style={{margin:'8px'}}/>
                        <p className={'text-thin text-black text-center justify-center '} style={{
                            margin:'10px'
                        }}>Oyindamola</p>
                        <Icon icon="prime:chevron-down" style={{marginTop:'6px',color: '#292e48'}} width={35}
                              height={35}/>
                    </div>
                </div>
            </div>
        );
    }

    export default Navbar;