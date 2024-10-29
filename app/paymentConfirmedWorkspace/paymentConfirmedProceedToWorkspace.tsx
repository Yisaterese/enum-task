import ConfirmPayment from "../../component/paymentConfirmed";

export default function PaymentConfirmedWorkspacePage(){
    return(
        <ConfirmPayment text={'Processed to Workspace'} link={'/'}/>
    );
}