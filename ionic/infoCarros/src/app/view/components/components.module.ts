import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCarrosComponent } from './loading-carros/loading-carros.component';
import { IonicModule } from '@ionic/angular';
import { CarroComponent } from './carro/carro.component';

@NgModule({
  declarations: [LoadingCarrosComponent, CarroComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LoadingCarrosComponent, CarroComponent]
})

export class ComponentsModule {}
