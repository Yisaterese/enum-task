import React from "react";
import Rating from "@/component/rating";

export default function ApplicationFeeMidsection(){
    return(
        <div className={'border-t-2 flex'}>
            <div className={'w-[68%] border-r-2 '}>
                <div className={'ml-[15%] my-8 mr-[24%] mt-[80px]'}>
                    <div>
                        <h1 className={'text-black  text-[16px] font-[550]'}>Application Process</h1>
                        <p className={'text-black text-semibold mt-8'}>Application Fee</p>
                        <div className={'text-black text-xs mt-4 '}>
                            Once you make payment for this course, you will receive a
                            confirmation mail with a link for your assesment.
                        </div>
                    </div>
                    <div>
                        <p className={'text-black text-semibold mt-8'}>Assessment</p>
                        <div className={'text-black text-xs mt-4 '}>
                            Once assessment has been taken, you
                        </div>
                    </div>
                    <div>
                        <p className={'text-black text-semibold mt-8'}>Program Fee</p>
                        <div className={'text-black text-xs mt-4 '}>
                            Once you make payment for this course, you will receive a confirmation mail with a link to your cohort
                        </div>
                    </div>

                </div>
            </div>
            <div className={'w-[30%] pt-8 pl-4 pr-10'}>
                <div className={'mb-10'}>
                    <Rating />
                </div>
            </div>
        </div>
    );
}