export class User{
  constructor(public email:string, public id: string, private _token:string,private _tokenExpriationDAte:Date){

  }
  get token(){
    if(!this._tokenExpriationDAte || new Date()>this._tokenExpriationDAte){
      return null
    }
    return this.token;
  }
}
