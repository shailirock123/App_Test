import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'App_Test';
  values ={}

  constructor(){}

  parentfunction(data:any){
    console.log(data)
    this.values = data.values;
  }

  ngOnInit(): void {
    
  }
  
}
