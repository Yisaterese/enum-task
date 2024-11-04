import {StaticImageData} from "next/image";

export type ProgramSectionProps = {
    image?: StaticImageData;
    word: string;
    className?: string;
};

export type ButtonProps={
    icon?: StaticImageData;
    word?:string;
    className?: string;
}

export type HeroPageProps ={
    path:string;
    buttonText? :string;
    heroBackButton:string;
}

export type AssessmentNavbarProps={
    onCancel: () => void;
    link:string;
}

export type OptionsText={
    text:string;
}
export interface RatingProps {
    applicationFee: string;
    programFee: string;
    button: string;
    classname?: string;
    link: string,
}

export type AssessmentGrantedProps ={
    image?: StaticImageData;
    text: string;
    style?:string;
}

export type PaymentProps={
    leadershipProgramFee:string;
    subtotal:string;
    leadershipProgramText:string;
    couponDiscount:string;
    total:string;
    path:string;
}

export type ConfirmPaymentProps ={
    text: string;
    link: string;
}
