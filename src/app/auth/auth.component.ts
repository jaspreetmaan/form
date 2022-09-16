import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode =true;

  constructor(private authService : AuthService){

  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;

  }
  onSubmit(form : NgForm )
  {
    if(!form.valid){
      return ;
    }
    console.log(form.value)





    this.authService.signup(form.value).subscribe( res =>{
        console.log(res.message);
    });


    form.reset();
  }
}
