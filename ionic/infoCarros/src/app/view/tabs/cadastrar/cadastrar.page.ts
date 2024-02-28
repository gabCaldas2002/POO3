import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { AuthService } from 'src/app/model/service/auth.service';
import { FirebaseService } from 'src/app/model/service/firebase.service';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage implements OnInit{
  formCadastrar! : FormGroup;

  modelo! : string;
  marca! : string;
  cor! : string;
  ano! : number;
  potencia! : number;
  porta! : Portas
  lista_carros: Carro[] = []
  public imagem : any;
  public user: any;
  anoAtual! : number;

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService, private auth: AuthService, private formBuilder : FormBuilder, private alert : AlertService){
    this.user = this.auth.getUserLogged();
    this.formCadastrar = new FormGroup({
      modelo : new FormControl(''),
      marca : new FormControl(''),
      cor : new FormControl(''),
      ano : new FormControl(''),
      potencia : new FormControl(''),
      porta : new FormControl('')
    })
    this.anoAtual = new Date().getFullYear();

  }

  ngOnInit(){
    this.formCadastrar = this.formBuilder.group({
      modelo : ['', [Validators.required, Validators.maxLength(35)]],
      marca : ['',[Validators.required, Validators.maxLength(20)]],
      ano : ['',[Validators.required, Validators.min(1900), Validators.max(this.anoAtual)]],
      cor : ['',[Validators.required]],
      potencia : ['',[Validators.required, Validators.min(30), Validators.max(2000)]],
      porta : ['',[Validators.required]]
    })
  }

  submitForm() : boolean{
    if(!this.formCadastrar.valid){
      this.alert.presentAlert('Erro', 'Erro ao Preencher!');
      return false;
    }else{
      this.alert.simpleLoader();
      this.cadastrar();
      return true;
    }
  }

  public uploadFile(imagem: any){
    this.imagem = imagem.files;
  }

  cadastrar(){
    const { modelo, marca, cor, ano, potencia, porta} = this.formCadastrar.value;
    if(modelo && marca && cor && ano && potencia && porta){
      let novo: Carro = new Carro(modelo, marca, cor, ano, potencia, porta)
      novo.uid = this.user.uid;
      if(this.imagem){
        this.firebase.uploadImage(this.imagem, novo)
      }else{
        this.firebase.create(novo);
      }
      this.router.navigate(["/tabs/home"])
      this.alert.presentAlert("Sucesso", "Carro cadastrado")
      console.log(novo)
      
    }
    else{
      this.alert.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    
  }

}

