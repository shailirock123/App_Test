import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  value ='hello';
  constructor(){

  }

  getvalue(event:any){
    this.value = event.target.value;  
  }
}
