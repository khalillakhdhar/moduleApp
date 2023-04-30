import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{ path: '', component: SiteComponent,
children: [

  { path: '', component:ProposComponent },
  { path: 'contact',component:ContactComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
