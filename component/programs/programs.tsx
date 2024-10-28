import Image from 'next/image';
import Link from "next/link";
import {ProgramImageList} from "@/utils/list";

const ProgramsPages = () => {
    return (
        <div style={{}}>
            {
                ProgramImageList.map(([image, logo, title, price], index) => (
                    <Link key={index} className={'h-[300px] w-[550px]'} href={''}>
                        <Image src={image} alt={'title'} style={{width:'20px', height:'20px',position:"relative"}}/>
                        <div className={'absolute w-full mt-[-40px]'}>
                            <Image src={logo} alt={`${title} logo`} style={{width:'2px',height:'2px'}}  />
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default ProgramsPages;