import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    SiteComponent,
    ProposComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
