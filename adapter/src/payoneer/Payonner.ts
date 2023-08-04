import Token from "../utils/token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Enviando pagamento via payonner");
    }
    receivePayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Recebendo pagamento via payonner");
    }
    
}