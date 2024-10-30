import React from 'react';
import Image from "next/image";
import SuccessIcon from '../public/confirmPayment/SuccessIcon.png';
import Button from "../component/button";
import {ConfirmPaymentProps} from "../types/types";
import Link from 'next/link';
const ConfirmPayment:React.FC<ConfirmPaymentProps>=({text,link})=>{
    return(
        <div className={''} style={{paddingRight:'400px',paddingLeft:'400px',justifyItems:'center'}}>
            <div  style={{margin:'70px 32px 40px '}}>
                <Image src={SuccessIcon} alt={'successIcon'} className={' w-[100px] h-[100px] '} />
            </div>

            <div className={'text-black justify-items-center '}>
                <p className={'text-lg font-bold  '} style={{margin:'0 120px 0 120px',justifyItems:'center'}} >Payment Confirmed, check <p >your Email</p></p>
                <p className={''} style={{
                    fontSize:'12px',
                    padding:'20px 0 20px 0',
                    justifyItems:'center'
                }}>Your payment has been confirmed, please check your Email <p >
                    for the
                    Assessment link or click the button below.
                </p>
                </p>
                <div className={' '}>
                    <Link href={link}>
                        <Button word={text} className="button" />
                    </Link>
                </div>


            </div>
        </div>
    );
}
export default ConfirmPayment;