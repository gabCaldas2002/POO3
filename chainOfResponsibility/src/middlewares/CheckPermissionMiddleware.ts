import Database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{

    public check(email: string, password: string) {
        console.log(" aquuiiiii")
        const user = Database.filter(item => item.email === email);
        if(user[0].permission === PermissionType.ADMIN){
            console.log("Bem-vindo administrador");
        }else{
            console.log("Benm-vindo usuário")
        }

        return this.checkNext(email, password);
    }
    
}