export default abstract class Middleware{
    private _next: Middleware;

    public linkWith(next : Middleware): Middleware{
        this._next = next;
        return this._next;
    }

    protected checkNext(email: string, password: string): boolean{
        if(this._next === undefined){
            return true;
        }
        return this._next.checkNext(email, password);
    }

    public abstract check(email: string, password: string);

}