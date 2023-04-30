import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [{ path: '', component: CompteComponent
,children:[
  {path:'', component:AuthComponent},
  {path:'inscription', component:InscriptionComponent},
]

},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }
