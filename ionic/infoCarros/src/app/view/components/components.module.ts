import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCarrosComponent } from './loading-carros/loading-carros.component';
import { IonicModule } from '@ionic/angular';
import { CarroComponent } from './carro/carro.component';
import { EmptyCarrosComponent } from './empty-carros/empty-carros.component';

@NgModule({
  declarations: [LoadingCarrosComponent, CarroComponent, EmptyCarrosComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LoadingCarrosComponent, CarroComponent, EmptyCarrosComponent]
})

export class ComponentsModule {}
