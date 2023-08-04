import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payoneer/IPayonnerPayment";
import Payonner from "./payoneer/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

//const payment : IPayPalPayment = new PayPal();
//payment.paypalPayment();
//payment.paypalReceive();

//const payment2: IPayonnerPayment = new Payonner();
//payment2.sendPayment();
//payment2.receivePayment();

const payment : IPayPalPayment = new PayonnerAdapter(new Payonner());
payment.paypalPayment();
payment.paypalReceive();