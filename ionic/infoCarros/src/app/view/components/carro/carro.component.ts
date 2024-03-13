import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/app/model/entities/Carro';
import { AuthService } from 'src/app/model/service/auth.service';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss'],
})
export class CarroComponent  implements OnInit {
  @Input() lista_carros: Array<Carro> = [];
  public user: any;



  constructor(
    private alertController: AlertController,
    private router: Router,
    private firebase: FirebaseService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUserLogged();
    console.log(this.authService.getUserLogged());
  }
  ngOnInit() {
    
  }

  editar(carro : Carro){
    this.router.navigateByUrl("/detalhar", {state: {carro: carro}});
  }
}
