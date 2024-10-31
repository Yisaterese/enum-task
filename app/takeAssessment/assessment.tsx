'use client'
import React, { useState } from 'react';
import Instructions from '../../component/intsructions';
import Link from 'next/link';

const AssessmentPage = () => {
    const [isChecked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div className='my-8 text-black'>
            <div className='mx-[300px]'>
                <p className='font-[800]'>Business Management Application Assessment</p>
                <Instructions />
                <div className='mb-7'>
                    <p className='text-[15px] font-bold mb-3'>Test Instructions</p>
                    <p>Attempt all Questions</p>
                </div>
                <div className='flex gap-2'>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                        className='w-[20px] h-[20px] mt-2'
                    />
                    <p className='mt-2 font-bold text-[12px]'>I have read and understood all the instructions above</p>
                </div>
                {isChecked ? (
                    <Link href={'/assessmentPage'}>
                        <button
                            className='text-[14px] mr-[31rem] rounded-lg py-2 my-5 px-6 bg-blue-500 text-white'
                        >
                            Begin Assessment
                        </button>
                    </Link>
                ) : (
                    <button
                        className='text-[14px] mr-[31rem] rounded-lg py-2 my-5 px-6 bg-[#D0DCEA] text-blue-50 cursor-not-allowed'
                        disabled
                    >
                        Begin Assessment
                    </button>
                )}
            </div>
        </div>
    );
};

export default AssessmentPage;
