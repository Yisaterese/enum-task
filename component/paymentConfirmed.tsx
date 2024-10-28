import React from 'react';
import Image from "next/image";
import SuccessIcon from '../public/confirmPayment/SuccessIcon.png';
import Button from "../component/button";
import {ConfirmPaymentProps} from "../types/types";
const ConfirmPayment:React.FC<ConfirmPaymentProps>=({text})=>{
    return(
        <div className={'px-[400px] justify-items-center'}>
            <div className={'  my-[100px] mb-8 mt-[70px]'}>
                <Image src={SuccessIcon} alt={'successIcon'} className={' w-[100px] h-[100px] '} />
            </div>
            <div className={'text-black justify-items-center   '}>
                <p className={'text-lg font-bold py-5  mx-[120px] justify-items-center'}>Payment Confirmed, check <p >your Email</p></p>
                <p className={'text-[12px] py-5 justify-items-center '}>Your payment has been confirmed, please check your Email <p >
                    for the
                    Assessment link or click the button below.
                </p>
                </p>
                <Button word={text} className='bg-blue-600 rounded text-white px-2 py-2  text-[13px]'/>

            </div>
        </div>
    );
}
export default ConfirmPayment;