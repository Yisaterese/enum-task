import {StaticImageData} from "next/image";

export type ProgramSectionProps = {
    image?: StaticImageData;
    word: string;
    className?: string;
};

export type ButtonProps={
    icon?: StaticImageData;
    word:string;
    className?: string;
}
