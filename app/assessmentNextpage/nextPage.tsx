import React from 'react';
import Button from "@/component/button";
import {Icon} from '@iconify/react';
import colouredShapes from '../../public/takeAssessment/colouredShapes.png';
import Image from 'next/image';
import letterA from '../../public/takeAssessment/letterA.png';
import letterB from '../../public/takeAssessment/letterA.png';
import letterC from '../../public/takeAssessment/letterA.png';
import letterD from '../../public/takeAssessment/letterA.png';

export default function NextPage() {
    return(
        <div>
            <div className={'mx-[200px] mb-10'}>
                <div className='flex  p-3 pl-0 text-black'>
                    <Icon icon={'tabler:arrow-left'} className={'w-[24px] h-[24px] text-black'}/>
                    <Button word={'back'} className='w-[32px ] h-[24px]  font-[400] text-[14px] leading-[24px]'/>
                </div>
                <p className={'absolute w-[38px] h-[16px] top-[107px] left-[1011px] text-black font-[500] text-[12px] leading-[15.62px] tracking-[2%]'}>09:52</p>
                <p className={'border border-blue-500 my-[50px] '}></p>
                <div>
                    <div className={'text-black flex justify-between'}>
                        <div>
                            <p className={'h-[31px] w-[527px] font-[600] text-[20px]  leading-[31.2px] tracking-[-2]'}>Business Management Application Assessment</p>
                            <p className={'text-[#6E7EA8] h-[28px] w-[151px] text-[14px] font-[400] leading-[28px]'}>4 Questions · 5 mins</p>
                        </div>
                        <p className={'text-[12px] font-[500] leading-[15.62px] tracking-[10%]'}>TOTAL UNANSWERED: 3</p>
                    </div>
                    <div className={'flex '}>
                        <div className={'text-black w-[50%] h-[380px] mt-10'}>
                            <p>Which of the following best describes the current
                                art scene in Nigeria and Sub-Saharan bearing in mind that Buhari is an
                                artist and said that Picasso is Igbo and
                                not Fulani and does not like Tuwo Shinkafa?
                            </p>
                            <p className={'text-[12px] my-2'}>Select all that apply</p>
                        </div>


                        <div className={'ml-10  w-[50%] mt-[45px]  text-black'}>
                            <div className='flex p-2  gap-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterA} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'Nigerian art is undergoing an evolution '}
                                        className='w-[32px ] h-[18px]font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2 gap-2   pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterB} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'Nigerian art is a cruise'}
                                        className='w-[32px ] h-h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2  gap-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterC} alt={'letterC'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'European art has got nothing on Nigerian art'} className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex gap-2  p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterD} alt={'letterD'} className={'w-[24px] h-[24px] ml-2 text-black'}/>
                                <Button word={'Nigerian art is in a bubble'} className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            {/*the last two buttons*/}
                            <div className={'flex gap-5 '}>
                                <div
                                    className='flex gap-2 w-[50%] p-2 pl-0 text-white bg-white justify-center rounded-lg border border-blue-500 mt-[45px]'>
                                    <Button word={'Previous '}
                                            className='w-[32px] text-blue-500 h-[24px] font-[400] text-[14px] leading-[24px]'/>
                                </div>
                                <div
                                    className='flex gap-2 w-[50%] p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]'>
                                    <Button word={'Next '}
                                            className='w-[32px ] h-[24px] font-[400] text-[14px] leading-[24px]'/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}