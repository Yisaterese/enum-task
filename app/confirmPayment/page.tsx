import Navbar from "../../component/navbar";
import PaymentConfirmedPage from "../../app/confirmPayment/paymentConfirmed";

export default function Page(){
  return(
      <div>
          <Navbar/>
          <PaymentConfirmedPage/>
      </div>
  );
}