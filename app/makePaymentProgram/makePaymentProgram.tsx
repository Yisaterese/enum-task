
import React from "react";
import ProgramPayment from "../../component/programPayment";
export default function Payment(){
    return (
        <ProgramPayment path={'/confirmPayment'}
                        leadershipProgramFee={' ₦840,000'}
                        couponDiscount={'-₦360,000'}
                        leadershipProgramText={'Business Leadership Program'}
                        subtotal={'₦1,200,000'} total={'₦840,000'} />
    );


}
