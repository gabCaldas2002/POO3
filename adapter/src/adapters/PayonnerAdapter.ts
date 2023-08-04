import Payonner from "../payoneer/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/token";

export default class PayonnerAdapter implements IPayPalPayment{
    private token : Token;

    constructor(private payonner : Payonner){
        console.log("Adaptando payonner no paypal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payonner.sendPayment();
    }
    paypalReceive(): void {
        return this.payonner.receivePayment();
    }
    
}