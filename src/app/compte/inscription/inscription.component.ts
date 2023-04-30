import { Component } from '@angular/core';
import { User } from 'src/app/classe/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user=new User();
users:any; // tableau de users
  constructor() { // constructeur
    // verifier si localStorage est vide
    if(localStorage.getItem('users')==null){
      this.users=[];
    }else{
      // si localStorage n'est pas vide
      this.users=JSON.parse(localStorage.getItem('users')||'{}');
    }
  }
inscrire()
{
  // ajouter le user dans le tableau users et le stocker dans localStorage
  this.users.push(this.user);
  localStorage.setItem('users',JSON.stringify(this.users)); // stocker dans localStorage
  this.user=new User(); // vider le formulaire
  // json stringfy convertir un objet en chaine de caractere
  // json parse convertir une chaine de caractere en objet
}
}
