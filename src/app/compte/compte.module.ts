import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompteComponent,
    AuthComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    FormsModule
  ]
})
export class CompteModule { }
