import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user.model";

interface AuthResPonseData{
  accessKey:string,
  refershKey:string,
  status:boolean,
  message:string
}

@Injectable({providedIn:'root'})
export class AuthService{
  user = new Subject<User>()
  constructor(private  http:HttpClient){

  }

  signup(loginCred:{Username:string, Password : string} ){
    console.log(loginCred)
   return this.http.post<AuthResPonseData>("https://localhost:7018/api/Auth/login",loginCred)};


}
