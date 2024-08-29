import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPromocaoComponent } from './pages/cadastro-promocao/cadastro-promocao.component';

const routes: Routes = [
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
