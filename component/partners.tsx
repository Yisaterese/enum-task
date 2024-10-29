import React from 'react';
import henleyBusinessSchoolImage from '../public/landingPagePaid/partners/henleyBusinesSchoolbadge.png';
import IconWithText from "../component/iconWithText";
import {Icon} from '@iconify/react';
const Partners=()=>{
    return(
        <div className={'mt-8  mb-4 '}>
            <div className={'flex gap-2 ml-[5%] mr-[5%]' } >
                <p className={'text-black m-3  mr-0 ml-0'}>Partners:</p>
                <Icon icon="fluent:chevron-left-24-filled" className={'text-black h-5 w-5 mt-3 '}/>
                <div className="border-l-2 border-gray-300 h-10 mt-1"></div>
                <IconWithText image={henleyBusinessSchoolImage} word={'Henley Business School'}
                              className={'gap-2 text-black '}/>
                <div className="border-l-2 border-gray-300 h-10 mt-1"></div>
                <IconWithText image={henleyBusinessSchoolImage} word={'Henley Business School'}
                              className={'gap-2 text-black '} />
                <div className="border-l-2 border-gray-300 h-10 mt-1"></div>
                <IconWithText image={henleyBusinessSchoolImage} word={'Henley Business School'}
                              className={'gap-2 text-black'}/>
                <div className="border-l-2 border-gray-300 h-10 mt-1"></div>
                <IconWithText image={henleyBusinessSchoolImage} word={'Henley Business School'}
                              className={'gap-2 text-black '}/>
                <div className="border-l-2 border-gray-300 h-10 mt-1"></div>
                <Icon icon="mi:chevron-right" className={' h-5 w-5 mt-3'} style={{color: '#209CF1'}}/>
            </div>
        </div>

    );
}
export default Partners;