import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./view/tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'detalhar',
    loadChildren: () => import('./view/carros/detalhar/detalhar.module').then( m => m.DetalharPageModule)
  },

  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

  {
    path: 'signin',
    loadChildren: () => import('./view/usuarios/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/usuarios/signup/signup.module').then( m => m.SignupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }