import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AFCI Formation';
  nom = "Abdul";
  votreNom()
  {
    return this.nom
  }

  obj={
    name:'Abdul',
    age:45
  }
  arr=['simo','brandon','sakho','thicot']

  a=50;
  b=150;
  show="white"
  obtNom(nom:any)
  {
    this.show=nom
    
  }
  moLev1(nom:any)
  {
    alert(nom)
    
  }

 color="red";



 location=['Paris','London','Swiss','Berlin']


 data=
  [
    {
      nom:'Nabi',
      prenom:'Mohammed',
      adresse:'Paris',
      email:'nabi@yahoo.com'
    },
    {
      nom:'simo',
      prenom:'Fobri',
      adresse:'Paris',
      email:'simo@yahoo.com'
    },
    {
      nom:'Felten',
      prenom:'Ezechiel',
      adresse:'Paris',
      email:'felten@yahoo.com'
    },
    {
      nom:'Sakho',
      prenom:'Zakaria',
      adresse:'Paris',
      email:'sakho@yahoo.com'
    },
    {
      nom:'Thicot',
      prenom:'Richardson',
      adresse:'Paris',
      email:'thicot@yahoo.com'
    },
    {
      nom:'Ramparsah',
      prenom:'Brandon',
      adresse:'Paris',
      email:'brandon@yahoo.com'
    },
    {
      nom:'Roppel',
      prenom:'Adrian',
      adresse:'Paris',
      email:'roppel@yahoo.com'
    },
  ]

}
