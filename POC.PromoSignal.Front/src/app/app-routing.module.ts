import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPromocaoComponent } from './pages/cadastro-promocao/cadastro-promocao.component';
import { HomeComponent } from './pages/home/home.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'promocoes',
    component: PromocoesComponent
  },
  {
    path: 'cadastro-promocao',
    component: CadastroPromocaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
