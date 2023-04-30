import { Component } from '@angular/core';
import { User } from 'src/app/classe/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
user=new User();
users:any; // tableau de users
  constructor() { // constructeur
    // verifier si localStorage est vide
    if(localStorage.getItem('users')==null){
      this.users=[];
      alert('aucune inscription sur ce site');
    }else{
      // si localStorage n'est pas vide
      this.users=JSON.parse(localStorage.getItem('users')||'{}');
    }
  }
authentifier()
{
  // parcourir le tableau users
  /*
  for(let us of this.users)
  {
    // verifier si l'email et le password sont corrects
    if(us.email==this.user.email && us.password==this.user.password)
    {
      alert('bienvenue '+us.nom);
      break;
    }

  }
  this.user=new User(); // vider le formulaire
  */
  // filter retourne un tableau
  // verifier si le tableau contient le email et le password
  let tab=this.users.filter((obj:any)=>obj.email==this.user.email && obj.password==this.user.password);
  if(tab.length!=0)
  {
    alert('bienvenue '+tab[0].nom);
  }else{
    alert('email ou password incorrect');
  }
}
}
