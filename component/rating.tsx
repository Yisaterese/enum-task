import { Icon } from "@iconify/react";
import React from "react";
import { RatingProps } from "../types/types";
import Link from 'next/link';

const Rating: React.FC<RatingProps> = ({ applicationFee, programFee, button, classname,link}) => {
    return (
        <div className={`rounded mt-4 ml-5 mr-6`}>
            <div className="" style={{ color: '#b3e2ef' }}>
                <div className="max-w-md mx-auto border-2 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 bg-[#F6FCFF] h-[50%]">
                        <div>
                            <h2 className="text-[10px] mb-1" style={{color:'#6174A1'}}>APPLICATION FEE</h2>
                            <div style={{display:'flex',gap:'8px'}}>
                                <p className="text-xl font-bold text-blue-500 mb-3">{applicationFee}</p>
                                <p style={{
                                    marginTop:'5px',
                                    marginBottom:'5px',
                                    textDecoration: 'line-through',
                                    color: '#9CABB5',
                                    fontSize: '12px'
                                }}>₦12,000.00</p>
                            </div>

                            <h2 className="text`-[8px]  mb-1" style={{color: '#6174A1', fontSize: '10px'}}>PROGRAM
                                FEES</h2>
                            <div className={'flex gap-2'}>
                                <p className="text-xl font-bold text-blue-500 mb-3">{programFee}</p>
                                <p style={{textDecoration:'line-through', color:'#9CABB5',fontSize:'12px',paddingTop:'5px'}}>₦1,200,000.00</p>
                            </div>
                            <Link href={link}>
                                <button className={`bg-blue-500 text-white py-2  rounded hover:bg-blue-600  ${classname}`} style=
                                    {{
                                        paddingLeft:'16px',
                                        paddingRight:'16px',
                                        width:'100%'
                                    }}>{button}
                                </button>
                            </Link>
                        </div>
                        <div style={{ alignItems: 'center',}}>
                            <Link href={link}>
                                <button className="text-blue-500  " style={{
                                width: '100%',
                                marginTop: '12px',
                                paddingLeft: '16px',
                                paddingRight: '16px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                                fontSize: '12px',
                            }}>
                                View Application Process
                            </button>
                            </Link>
                        </div>

                    </div>
                    <div style={{marginTop: '14px', height: '100%', width: '50%'}}>
                        <div className="flex-col" style={{marginLeft: '24px'}}>
                            <div className=" mb-3 gap-2 flex" style={{marginLeft: ''}}>
                                <Icon icon={'lucide:book-open'} className=" w-4 h-4" style={{color: '#C0CAD0',}}/>
                                <h1 className="text-black text-xs font-medium"> 2 Modules</h1>
                            </div>
                            <div className="ml-6 mb-3 gap-2 flex">
                                <Icon icon={'uit:calender'} className="text-[#C0CAD0] w-4 h-4" style={{color:'#C0CAD0',}}/>
                                <h1 className="text-black text-xs font-medium"  > 7 Months</h1>
                            </div>
                            <div className="ml-6 mb-3 gap-2 flex">
                                <Icon icon={'ep:user'} className=" w-4 h-4" style={{color:'#C0CAD0',}} />
                                <h1 className="text-black text-xs font-medium"> 5,000 enrolled</h1>
                            </div>
                        </div>
                        <div className="" style={{marginLeft:'24px',paddingTop:'32px',paddingBottom:'32px'}}>
                            <h1 className="text-black " style={{fontWeight:'500', fontSize:'10px'}}> PROGRAM RATING</h1>
                            <div className="" style={{marginTop:'8px',marginBottom:'8px',display:'flex',gap:'8px'}}>
                                <Icon icon={'ic:outline-star'} className=" " style={{color:'#FFB403',width:'19.4px',height:'19.4px'}}/>
                                <p className="text-black" style={{display:"flex",gap:'4px'}}>4.8<h1 className="" style={{margin:'4px',fontSize:'10px'}}>(98)</h1></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;
