export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVudmlhbmRvIGUgcmVjZWJlbmRvIHBhZ2FtZW50b3MifQ.bpoDhroj0PfNOgilpU_cVQ2EMj8k2d4kl3nqu5gWv0g";

    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }

}