import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/model/service/firebase.service';
import { AuthService } from 'src/app/model/service/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  carro! : Carro;
  modelo! : string;
  marca! : string;
  cor! : string;
  ano! : number;
  potencia! : number;
  porta! : Portas
  edicao : boolean = true;
  public imagem: any
  public user: any;
  formAtualizar! : FormGroup;
  anoAtual! : number;
  isLoading: boolean = false


  constructor(private auth: AuthService, private firebase: FirebaseService, private router : Router, private alert : AlertService, private formBuilder : FormBuilder) { 
    this.user = this.auth.getUserLogged();
    this.formAtualizar = new FormGroup({
      modelo : new FormControl(''),
      marca : new FormControl(''),
      cor : new FormControl(''),
      ano : new FormControl(''),
      potencia : new FormControl(''),
      porta : new FormControl('')
    })
    this.anoAtual = new Date().getFullYear();
  }

  ngOnInit() {      
      this.carro = history.state.carro;
      console.log(this.carro);
      this.formAtualizar = this.formBuilder.group({
      modelo : [this.carro.modelo, [Validators.required, Validators.maxLength(35)]],
      marca : [this.carro.marca,[Validators.required, Validators.maxLength(20)]],
      ano : [this.carro.ano,[Validators.required, Validators.min(1900), Validators.max(this.anoAtual)]],
      cor : [this.carro.cor,[Validators.required]],
      potencia : [this.carro.potencia,[Validators.required, Validators.min(30), Validators.max(2000)]],
      porta : [this.carro.porta,[Validators.required]]
      })
  }

  public uploadFile(imagem: any){
    this.imagem = imagem.files;
  }

  habilitarEdicao(){
    if(this.edicao){
      this.edicao=false;
    }else{
      this.edicao=true;
    }
  }

  editar(){
    const { modelo, marca, cor, ano, potencia, porta} = this.formAtualizar.value;
    if(modelo && marca && cor && ano && potencia && porta){
      let novo: Carro = new Carro(modelo, marca, cor, ano, potencia, porta)
      novo.id = this.carro.id;
      novo.uid = this.user.uid;
      if(this.imagem){
        this.firebase.uploadImage(this.imagem, novo);
      }else{
        novo.downloadURL = this.carro.downloadURL;
        this.firebase.update(novo, this.carro.id);
      }
      this.firebase.update(novo, this.carro.id)
      this.router.navigate(['/tabs/home'])
      this.alert.presentAlert("Sucesso", "Carro atualizado")
    }
    else{
      
      this.alert.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
  }

  submitForm() : boolean{
    if(!this.formAtualizar.valid){
      this.alert.presentAlert('Erro', 'Erro ao Preencher!');
      return false;
    }else{
      this.alert.simpleLoader();
      this.editar();
      return true;
    }
  }

  excluir(){ 
    this.firebase.delete(this.carro.id);
    this.router.navigate(['/tabs/home'])
  }

}
