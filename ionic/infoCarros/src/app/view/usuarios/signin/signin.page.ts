import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/common/alert.service';
import { AuthService } from 'src/app/model/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  formLogar: FormGroup;
  isLoading: boolean = false;


  constructor(private alert: AlertService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { 
    this.formLogar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.formLogar = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]]
      })

      this.isLoading = false;
    }, 3000);
  }

  get errorControl(){
    return  this.formLogar.controls;
  }

  submitForm() : boolean{
    if(!this.formLogar.valid){
      this.alert.presentAlert('Erro', 'Erro ao preencher!')
      return false
    }else{
      this.alert.simpleLoader();
      this.logar()
      return true;
    }
  }

  private logar(){
    this.authService.signIn(this.formLogar.value['email'], this.formLogar.value['senha']).then((res)=>{
      this.alert.dismissLoader();
      this.alert.presentAlert('Olá', 'Seja bem-vindo')
      this.router.navigate(["/tabs/home"])
    }).catch((error)=>{
      this.alert.dismissLoader();
      this.alert.presentAlert('Erro ao logar', 'Tente novamente')
      console.log(error.message);
    })
    
  }

  logarComGoogle(){
    this.authService.signInWithGoogle().then((res)=>{
      this.alert.presentAlert('Olá', 'Seja bem-vindo')
      this.router.navigate(["/tabs/home"])
    }).catch((error)=>{
      this.alert.presentAlert('Erro', 'Tente novamente')
      console.log(error.message);
    })
  }

  logarComGithub(){
    this.authService.signInWithGithub().then((res)=>{
      this.alert.presentAlert('Olá', 'Seja bem-vindo')
      this.router.navigate(["/tabs/home"])
    }).catch((error)=>{
      this.alert.presentAlert('Erro', 'Tente novamente')
      console.log(error.message);
    })
  }

  irParaSignup(){
    this.router.navigate(["/signup"])
  }

}