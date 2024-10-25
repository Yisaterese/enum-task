import React from 'react';
import { Icon } from '@iconify/react';

export default function ProgramPage() {
    return (
        <div>
            <div className="text-black justify-center mx-[305px] flex gap-5">
                <div className="gap-2 flex h-auto my-2 rounded-[30px] border-2 py-2 px-5">
                    <p className="pb-0">Price</p>
                    <Icon icon="gg:chevron-down" className="my-1" />
                </div>
                <div className="gap-2 flex h-auto my-2 border-2 rounded-[30px] py-2 px-5">
                    <p>Application fees</p>
                    <Icon icon="gg:chevron-down" className="text-black m-1" />
                </div>
                <div className="gap-2 flex h-auto my-2 border-2 rounded-[30px] py-2 px-5">
                    <p>Duration</p>
                    <Icon icon="gg:chevron-down" className="m-1" />
                </div>
                <p className="m-6 ml-0">Reset Filters</p>
            </div>
        </div>
    );
}
