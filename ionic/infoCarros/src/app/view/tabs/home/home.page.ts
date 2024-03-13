import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { AuthService } from 'src/app/model/service/auth.service';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  lista_carros: Carro[] = [];
  public user: any;

  isLoading: boolean = false;
  banners: any[] = [];

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
    this.isLoading = true;

    setTimeout(() => {
      this.firebase.read(this.user.uid).subscribe((res) => {
        this.lista_carros = res.map((carro) => {
          return {
            id: carro.payload.doc.id,
            ...(carro.payload.doc.data() as any),
          } as Carro;
        });
      });

      this.isLoading = false;
    }, 3000);
  }

  irParaCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  editar(carro: Carro) {
    this.router.navigateByUrl('/detalhar', { state: { carro: carro } });
  }
}
