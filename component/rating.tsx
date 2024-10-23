import {Icon} from "@iconify/react";
import React from "react";

const Rating=()=>{
    return (
        <div className={'rounded mt-4 ml-5 mr-6'}>
            <div className={''} style={{color: '#b3e2ef'}}>
                <div className="max-w-md mx-auto border-2 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 bg-[#F6FCFF] h-[50%]">
                        <div>
                            <h2 className="  text-[10px] text-[#6174A1] mb-1">APPLICATION FEE</h2>
                            <p className="text-xl font-bold text-blue-500 mb-3">₦10,000.00</p>
                            <h2 className="text-[8px] text-[#6174A1] mb-1">PROGRAM FEES</h2>
                            <p className="text-xl font-bold text-blue-500 mb-3">₦840,000.00</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 w-[100%] rounded hover:bg-blue-600">Apply
                                Now
                            </button>
                        </div>
                        <button
                            className=" text-xs mt-2 text-blue-500 px-4 py-2 w-[230px] rounded hover:bg-gray-300">View
                            Application Process
                        </button>
                    </div>
                    <div className={'mt-4 h-[100%] w-[50%]'}>
                        <div className={'flex-col'}>
                            <div className={'ml-6 mb-3 gap-2 flex'}>
                                <Icon icon={'lucide:book-open'} className={'text-[#C0CAD0] w-4 h-4'}/>
                                <h1 className={'text-black text-xs font-medium'}> 2 Modules</h1>
                            </div>
                            <div className={'ml-6 mb-3 gap-2 flex'}>
                                <Icon icon={'uit:calender'} className={'text-[#C0CAD0] w-4 h-4'}/>
                                <h1 className={'text-black text-xs font-medium'}> 7 Months</h1>
                            </div>
                            <div className={'ml-6 mb-3 gap-2 flex'}>
                                <Icon icon={'ep:user'} className={'text-[#C0CAD0] w-4 h-4'}/>
                                <h1 className={'text-black text-xs font-medium'}> 5,000 enrolled</h1>
                            </div>
                        </div>
                        <div className={'ml-6 py-8'}>
                            <h1 className={'text-black text-xs  font-medium'}> PROGRAM RATING</h1>
                            <div className={'gap-2 flex my-2 '}>
                                <Icon icon={'ic:outline-star'}
                                      className={'w-[19.4px] h-[19.4px] text-amber-400'}/>
                                <p className={'text-black gap-1 flex '}>4.8<h1
                                    className={'text-[10px] mt-[4px] '}>(98)</h1></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
export default Rating;