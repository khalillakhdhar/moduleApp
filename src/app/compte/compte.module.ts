import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    CompteComponent,
    AuthComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule
  ]
})
export class CompteModule { }
