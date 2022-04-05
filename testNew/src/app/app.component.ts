import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'AFCI Formation';
  getUserValue(value:any)
  {
    console.warn(value)
  }
  getName(abc:any)
  {
    alert(abc);
  }
  myEvent(evt:any)
  {
    console.warn(evt)
  }
  currentVal="10"
  getVal(val:any)
  {
    console.warn(val)
    this.currentVal=val
  }
  show="green"

  display=true
  toggle()
  {
    this.display=!this.display;
  }
  color='blue'

  data=
  [
    {
      name:'Brandon',
      age:20,
      email:'brandon@test.com'
    },
    {
      name:'Thicot',
      age:19,
      email:'thicot@test.com'
    },
    {
      name:'Felten',
      age:16,
      email:'felton@test.com'
    },
    {
      name:'Simo',
      age:17,
      email:'simo@test.com'
    },
  ]
  data1={
    
      name:'abdul',
      age:45
    
  }
  model=1;

}
