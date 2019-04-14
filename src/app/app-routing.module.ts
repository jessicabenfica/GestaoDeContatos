import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConsultaEnderecoComponent} from './contatos/consulta-endereco/ConsultaEnderecoComponent';

const routes: Routes = [
  {path: '', component: ConsultaEnderecoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
