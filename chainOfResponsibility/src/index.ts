import * as readline from "readline";
import Server from "./server/Server";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";

declare var process;
const server = new Server();

function setPromptQuestions(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite seu email: ", email =>{
        rl.question("digite sua senha: ", password => {server.logIn(email, password);
        rl.close();
        })
    })

    rl.on("close", () => setPromptQuestions());
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
setPromptQuestions();