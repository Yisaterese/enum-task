import Image from 'next/image';
import Link from "next/link";
import {ProgramImageList} from "@/utils/list";
import styles from '../styles/index.module.css'
const ProgramsPages = () => {
    return (
        <div className={styles.programPages}>
            {
                ProgramImageList.map(([image, logo, title,], index) => (
                    <Link key={index}  href={''}>
                        <div className={'h-[300px] w-[550px] '}>
                            <Image src={image} alt={'title'} />
                            <div className={'absolute w-full mt-[-40px]'}>
                                <Image src={logo} alt={`${title} logo`}   />
                            </div>
                        </div>

                    </Link>
                ))
            }
        </div>
    );
}

export default ProgramsPages;