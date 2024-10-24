import React from 'react';
import Button from "@/component/button";
import { Icon } from '@iconify/react';
import colouredShapes from '../../public/takeAssessment/colouredShapes.png';
import letterA from '../../public/takeAssessment/letterA.png';
import letterB from '../../public/takeAssessment/letterA.png';
import letterC from '../../public/takeAssessment/letterA.png';
import letterD from '../../public/takeAssessment/letterA.png';
import Image from "next/image";
import assessmentSubmittedIcon from '../../public/takeAssessment/assessmetSubmittedIcon.png';

export default function SubmittedPage() {
    return (
        <div className="relative">
            <div className="fixed inset-0 flex items-center justify-center bg-[#809EB3] bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold"></h2>
                        <button className="text-gray-500 hover:text-gray-700 w-4 text-2xl">×</button>
                    </div>
                    <Image src={assessmentSubmittedIcon} alt={'assessmentSubmittedIcon'}
                           className={'ml-[80px] mb-3 w-[175px] h-[175px] items-center'}/>
                    <div className="text-center mb-4">
                        <p className="text-xl  text-green-500 font-bold">Well done!</p>
                        <p className={'text-[12px] text-black'}>You will be notified once you are granted admission.</p>
                    </div>

                    <div className="flex justify-end ">
                        <button className=" bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Done</button>
                    </div>
                </div>
            </div>

            <div className="flex ml-[80px]  pl-0 text-black">
                <Icon icon={'tabler:arrow-left'} className={'w-[24px] h-[24px] text-black'} />
                <Button word={'back'} className='w-[32px] h-[24px] font-[400] text-[14px] leading-[24px]' />
            </div>
            <div className={'mx-[300px] '}>
                <div>
                    <p className={'h-[31px] w-[527px] font-[600] text-[20px] text-black leading-[31.2px] tracking-[-2]'}>Best
                        in Beauty Quiz</p>

                    <div className="flex items-center my-[50px]">
                        <p className="border border-blue-500 bg-blue-500 h-[3.7px] w-[11%]"></p>
                        <p className="border-2 border-gray-300 h-0 flex-grow"></p>
                        <p className="text-black text-[10px] mx-1">00:12</p>
                    </div>

                    <div>
                        <div className={'text-black flex justify-between'}>
                            <div>
                                <p className={'text-[#6E7EA8] h-[28px] w-[151px] text-[12px] font-[400] leading-[28px]'}>QUESTION
                                    1 OF 60</p>
                            </div>
                        </div>
                        <div className={'flex '}>
                            <div className={'text-black w-[440px] h-[380px]'}>
                                <p className={'text-black w-[440px] h-[20px] my-3'}>How many sides does the yellow
                                    polygon
                                    have?</p>
                                <Image src={colouredShapes} alt={'clouredShapes'} className={'w-[300px] h-[300px]'} />
                            </div>

                            <div className={'ml-10 mt-[45px] w-full text-black'}>
                                <div className='flex p-2 p-3 pl-0 text-black rounded-lg border-2 mb-3'>
                                    <Image src={letterA} alt={'letterA'}
                                           className={'w-[24px] ml-2 h-[24px] text-black'} />
                                    <Button word={'4 '}
                                            className='w-[32px] h-[18px] font-[400] text-[14px] leading-[24px]' />
                                </div>

                                <div className='flex p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                    <Image src={letterB} alt={'letterA'}
                                           className={'w-[24px] ml-2 h-[24px] text-black'} />
                                    <Button word={'6 '}
                                            className='w-[32px] h-h-[18px] font-[400] text-[14px] leading-[24px]' />
                                </div>

                                <div className='flex p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                    <Image src={letterC} alt={'letterC'}
                                           className={'w-[24px] ml-2 h-[24px] text-black'} />
                                    <Button word={'12'}
                                            className='w-[32px] h-[18px] font-[400] text-[14px] leading-[24px]' />
                                </div>

                                <div className='flex gap-3 p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                    <Image src={letterD} alt={'letterD'}
                                           className={'w-[24px] h-[24px] ml-2 text-black'} />
                                    <Button word={'8'}
                                            className='w-[32px] h-[18px] font-[400] text-[14px] leading-[24px]' />
                                </div>
                                <div
                                    className='flex gap-2 p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]'>
                                    <Button word={'Next '}
                                            className='w-[32px] h-[24px] font-[400] text-[14px] leading-[24px]' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
