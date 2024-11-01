'use client'
import Button from "../../component/button";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import submitAssessmentImage from "../../public/takeAssessment/submitAssessmentImage.png";
import timeImage from '../../public/takeAssessment/timeImage.png';
import Link from 'next/link';
import { useState } from "react";
import SubmittedPage from "../assessmentSubmitted/submittedPage";
import { options } from "../../utils/list";

export default function NextPage() {
    const [isSubmitButton, setIsSubmitButton] = useState(false);
    const [showTime, setShowTime] = useState(true);
    const handleSubmitButton = () => {
        setIsSubmitButton(true);
    };
    const handleShowTime =()=>{
        setShowTime(!showTime);
    }

    return (
        <>
            {isSubmitButton ? (
                <SubmittedPage />
            ) : (
                <div className="mx-[200px] mb-5">
                    <Link href="/assessmentNextpage">
                        <div className="flex p-3 pl-0 text-black">
                            <Icon icon="tabler:arrow-left" className="w-[24px] h-[24px] text-black" />
                            <Button word="back" className="w-[32px] h-[24px] font-[400] text-[14px] leading-[24px]" />
                        </div>
                    </Link>

                    <>
                        {showTime ? (
                            <div className="relative flex items-center pt-[100px]">
                                <div className="absolute top-[3px] left-[763px] transform -translate-x-1/2 flex items-center">
                                    <Image src={timeImage} alt="timeImage" className="w-[100px] h-[60px] text-black" />

                                    {/* hide time */}
                                    <div className="flex flex-col items-center text-black font-[500] text-[14px] leading-[18px] gap-2 py-1 ml-3">
                                        <button onClick={handleShowTime} className="text-blue-500">Hide</button>
                                        <p>09:52</p>
                                    </div>
                                </div>
                                <div className="absolute top-[15px] left-[760px] transform -translate-x-1/2 flex text-white">
                                    <Icon icon="mdi-light:clock" />
                                    <div className="flex-col ml-2">
                                        <p className="text-[10px]">Time Left</p>
                                        <p>09:52</p>
                                    </div>
                                </div>
                                {/* show time */}
                            </div>
                        ) : (
                            <div className="absolute top-[120px]  left-[1030px] transform -translate-x-1/2">
                                <button onClick={handleShowTime} className="text-blue-500 text-[14px]">Show time</button>
                            </div>
                        )}
                    </>



                    <p className="border border-blue-500 mb-5"></p>

                    <div>
                        <div className="text-black flex justify-between">
                            <div>
                                <p className="h-[31px] w-[527px] font-[600] text-[20px] leading-[31.2px] tracking-[-2]">
                                    Business Management Application Assessment
                                </p>
                                <p className="text-[#6E7EA8] h-[28px] w-[151px] text-[14px] font-[400] leading-[28px]">
                                    4 Questions · 5 mins
                                </p>
                            </div>
                            <p className="text-[12px] font-[500] leading-[15.62px] tracking-[10%]">
                                TOTAL UNANSWERED: 1
                            </p>
                        </div>

                        <div className="flex">
                            <div className="text-black h-[380px] w-[50%]">
                                <p className="w-[440px] h-[20px] my-6">
                                    Which of the following best describes the art below?
                                </p>
                                <Image src={submitAssessmentImage} alt="colouredShapes" className="w-[300px] h-[300px]" />
                            </div>


                            <div className=" mt-4 ml-6 gap-5 w-full">

                                <div className="w-full mt-[45px] text-black">
                                    {options.map((option, index) => (
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

                                <div className={'flex gap-2'}>
                                    <Link href="/assessmentPage"
                                          className="flex gap-2 w-[50%] p-2 text-blue-500 bg-white justify-center rounded-lg border border-blue-500 mt-[45px]"
                                    >
                                        <button className="w-[32px] h-[24px] font-[400] text-[14px]"> Previous</button>
                                    </Link>

                                    <button onClick={handleSubmitButton}
                                            className="flex gap-2 w-[50%] p-2 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]"
                                    >
                                        <button className="w-[32px] h-[24px] font-[400] text-[14px]"> Submit</button>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
