import React from 'react';
import Button from "@/component/button";
export default function AssessmentPage(){
    return(
        <div className="my-8 text-black">
            <div className=" mx-[300px]  ">
                <p className={'font-[800]'}>Business Management Application Assessment</p>
                <div className={'mb-5 mt-5 '}>
                    <p className={'text-[15px] font-bold'}>General Instructions</p>
                    <div className={'text-[12.5px] ml-[10px]'}>
                        <li className={'mt-3'}>Make sure you have a stable internet connection before you start the
                            test.
                            Test Instructions
                            Attempt all questions.
                        </li>
                        <li> Once test has begun, you cannot go back as you would be forced to submit.
                        </li>
                        <li>Once have submitted an answer, you can’t go back
                        </li>
                        <li>You may exit the test, but the timer will continue to run
                        </li>
                        <li>You will see a time notice when you have 10 minutes left for the test.
                        </li>
                        <li>If the test can be retaken, your latest score will be the score used.
                        </li>
                    </div>

                </div>
                <div className={'mb-7'}>
                    <p className={'text-[15px] font-bold mb-3'}>Test Instructions</p>
                    <p>Attempt all Questions</p>
                </div>


                <div className={'flex gap-2'}>
                    <button className={'py-2 my-2  px-2 border border-black'}></button>
                    <p className={'mt-2 font-bold text-[12px]'}>I have read and understood all the instructions above</p>
                </div>
                <Button word={'Begin Assessment'} className={'text-[14px] mr-[31rem] bg-[#D0DCEA] text-white border-2 text-[D0DCEA] rounded-lg py-2 my-5 px-5'}/>

            </div>
        </div>
    );
}