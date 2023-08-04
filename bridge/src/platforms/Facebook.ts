import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: plataforma configurada");
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: configurando broadcast");
    }
    authToken(): void {
        console.log("Facebook: autenticando token");
    }
}