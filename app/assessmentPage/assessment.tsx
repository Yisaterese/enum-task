import React from 'react';
import Button from "../../component/button";
import {Icon} from '@iconify/react';
import colouredShapes from  '../../public/takeAssessment/colouredShapes.png';
import Image from 'next/image';
import Link from 'next/link'
import {AssessmentPageOptions} from "@/utils/list";
export default function AssessmentPage() {
    return(
        <div>
            <div className={'mx-[200px] mb-10'}>
                <Link href={'/takeAssessment'}>
                    <div className='flex  p-3 pl-0 text-black'>
                        <Icon icon={'tabler:arrow-left'} className={'w-[24px] h-[24px] text-black'}/>
                        <Button word={'back'} className='w-[32px ] h-[24px]  font-[400] text-[14px] leading-[24px]'/>
                    </div>
                </Link>

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
                            <Image src={colouredShapes} alt={'clouredShapes'} width={300} height={300}/>
                        </div>


                        <div className=" mt-4 ml-6 gap-5 w-full">

                            <div className="w-full mt-[45px] text-black">
                                {AssessmentPageOptions.map((option, index) => (
                                    <div key={index}
                                         className="flex items-center p-2 gap-2 pl-0 text-black rounded-lg border-2 mb-3">
                                        <Image src={option.src} alt={option.alt}
                                               className="w-[24px] h-[24px] ml-2"/>
                                        <Button
                                            word={option.word}
                                            className="font-[400] text-[14px] leading-[24px]"
                                        />
                                    </div>
                                ))}
                            </div>

                            <Link href={'/assessmentNextpage'}>
                                <div
                                    className='flex gap-2  p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]'>
                                    <Button word={'Next '}
                                            className='w-[32px ] h-[24px] font-[400] text-[14px] leading-[24px]'/>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}