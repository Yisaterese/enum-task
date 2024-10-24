import React from 'react';
import Button from "@/component/button";
import {Icon} from '@iconify/react';
import colouredShapes from  '../../public/takeAssessment/colouredShapes.png';
import Image from 'next/image';
import letterA from '../../public/takeAssessment/letterA.png';
import letterB from '../../public/takeAssessment/letterA.png';
import letterC from '../../public/takeAssessment/letterA.png';
import letterD from '../../public/takeAssessment/letterA.png';

export default function AssessmentPage() {
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
                        <p className={'text-[12px] font-[500] leading-[15.62px] tracking-[10%]'}>TOTAL UNANSWERED: 4</p>
                    </div>
                    <div className={'flex '}>
                        <div className={'text-black w-[440px] h-[380px]'}>
                            <p className={'text-black w-[440px] h-[20px] my-3'}>How many sides does the yellow polygon
                                have?</p>
                            <Image src={colouredShapes} alt={'clouredShapes'} className={'w-[300px] h-[300px]'}/>
                        </div>


                        <div className={'ml-10 mt-[45px] w-full text-black'}>
                            <div className='flex p-2   p-3 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterA} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'4 '}
                                        className='w-[32px ] h-[18px]font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2   pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterB} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'6 '}
                                        className='w-[32px ] h-h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2   pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterC} alt={'letterC'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'12'} className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex gap-3  p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterD} alt={'letterD'} className={'w-[24px] h-[24px] ml-2 text-black'}/>
                                <Button word={'8'} className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex gap-2  p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]'>
                                <Button word={'Next '} className='w-[32px ] h-[24px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}