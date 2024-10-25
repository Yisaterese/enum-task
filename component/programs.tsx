import { ProgramImageList } from '../utils/list';
import Image from 'next/image';

const ProgramPages = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white justify-items-center">
            {ProgramImageList.map(([image, logo, title, price], index) => (
                <div key={index} className="h-[300px] w-[550px] relative">
                    <Image src={image} alt={title} className="w-[356px] h-[221px]" />
                    <div className="absolute w-full mt-[-40px] flex flex-col items-center">
                        <Image src={logo} alt={`${title} logo`} className="w-10 h-10 mb-2" />
                        <p className="text-xl">{title}</p>
                        {typeof price === 'string' ? (
                            <p className="text-lg">{price}</p>
                        ) : (
                            <Image src={price} alt="price image" className="w-[100px] h-[100px]" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgramPages;
