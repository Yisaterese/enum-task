import React from 'react';
import Button from "../../component/button";
import Instructions from '../../component/intsructions';

const AssessmentPage = () => {
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
                    <button className='py-2 my-2 px-2 border border-black'></button>
                    <p className='mt-2 font-bold text-[12px]'>I have read and understood all the instructions above</p>
                </div>
                <Button word='Begin Assessment' className='text-[14px] mr-[31rem] bg-[#D0DCEA] text-white border-2 text-[D0DCEA] rounded-lg py-2 my-5 px-5'/>
            </div>
        </div>
    );
};

export default AssessmentPage;
