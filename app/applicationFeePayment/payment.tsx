'use client';
import {Icon} from "@iconify/react";
import React from "react";
import Button from "../../component/button";
import heroImage from '../../public/landingPagePaid/hero/heroImage.png';
import paystack from '../../public/applicationFeepayment/payment/paystack.png'
import creditCard from '../../public/applicationFeepayment/payment/creditCard.png'
import Image from 'next/image';
export default function Payment(){
    return (
        <div>
            <div className={'flex  ml-[150px] '}>
                <link href={'/landingpageApplicationFee'}>
                    <Icon icon={'ri:arrow-left-line'} className={'text-black w-6 h-7 pb-3  mt-5'}/>
                    <Button className={'text-black text-[13px] mt-5 '} word={'Back'}/>
                </link>
            </div>
            <div className={'flex mt-5 mb-[100px]'}>
                <div className={'w-[68%] border-2 ml-[100px] '}>
                    <p className={'text-black mt-4 font-bold ml-[55px] '}>Make Payment</p>
                    <div className={'flex-col mt-8 mx-[55px]'}>
                        <p className={'text-black text-xs mb-5'}>DETAILS</p>
                        <div className={'flex gap-4 mb-8'}>
                                <Image src={heroImage} alt="heroImage" width={120} height={72} className="object-cover" />
                            <div className={'text-black mb-3 flex  justify-between w-full'}>
                                <div className={'my-4'}>
                                    <p className={'text-xs font-bold'}>Business Leadership - Application Fee</p>
                                    <h1 className={'text-[10px] mb-3'}>by Semicolon Africa</h1>
                                </div>
                                <p className={'text-blue-500 my-4 font-bold'}> ₦ 10,000</p>
                            </div>
                        </div>
                        <div className="border-b-2 border-dashed border-[#EDF2F5] w-full mb-5"></div>
                        <p className={'text-black text-xs mb-5'}>SELECT PAYMENT GATEWAY</p>
                        <div className={'flex justify-between text-black mb-8'}>
                            <Image src={paystack} alt={'payStack'} className={'flex gap-2 border border-blue-500 py-2 px-5 rounded'}/>
                            <div className={'flex gap-2 border-2 py-2 px-5 rounded'}>
                                <div className={'w-5 h-5'}>
                                    <Image src={creditCard} alt={'creditCard'}/>
                                </div>
                                <Button word={'Debit card'} className={''}/>
                            </div>
                            <div className={'flex gap-2 border-2 py-2 px-5 rounded'}>
                                <Image src={creditCard} alt={'creditCard'} className={'w-5 h-5'}/>
                                <Button word={'Debit card'} className={''}/>
                            </div>
                        </div>
                        <div className={'flex text-black justify-between mb-6'}>
                            <p className={'text-xs mr-[250px]'}>In order to complete your transaction, we will transfer you over
                                to the selected payment gateway secure servers.</p>
                            <div className={'flex gap-2'}>
                                <Icon icon={'uim:lock'} className={'h-10 w-8 text-[#808080]'}/>
                                <h1 className={'text-[8px] m-2 ml-0'}>Secure Connection</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-[30%] '}>
                    <div className={'bg-[#F6FCFF] ml-8 mr-[70px] text-black rounded-lg'}>
                        <div className="max-w-md mx-auto   overflow-hidden p-6">
                            <div className=" mb-6">
                                <h2 className="text-xl font-bold">Summary</h2>
                            </div>
                            <div className="mb-4">
                                <div className="flex-col  text-xs justify-between">
                                    <p className={'text-blue-500'}>Business Leadership Application <span>Fee</span></p>
                                    <div className={'flex justify-between'}>
                                    <h1>Subtotal</h1>
                                        <h1>₦12,000</h1>
                                    </div>
                                </div>
                                <div className="flex text-xs justify-between text-black">
                                    <p>Coupon discounts</p>
                                    <p>-₦2,000</p>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="flex justify-between font-bold">
                                <p>Total</p>
                                <p>₦10,000</p>
                            </div>
                            <p className={'text-[10px] mt-2'}>Enum is required by law to collect applicable transaction taxes.</p>
                            <div className="text-center mt-6">
                                <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Make
                                    Payment
                                </button>
                            </div>
                            <p className="mt-4 text-[10px] text-gray-600">By completing your purchase, you agree
                                to these <span className={' text-[#CCB0FB]'}>Terms of Service.</span></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
}

