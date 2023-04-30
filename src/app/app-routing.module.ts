import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  { path: 'compte', loadChildren: () => import('./compte/compte.module').then(m => m.CompteModule) }, // simple loading
  // lazy loading for notfound component from app.module module
  {path: '**',component:NotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
