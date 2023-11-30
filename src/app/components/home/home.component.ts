import { Component ,Output,EventEmitter, OnInit } from '@angular/core';
import{FormControl,FormGroup}from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  value ='hello';
  @Output() parentfunction:EventEmitter<any> = new EventEmitter()
  constructor(){

  }
  loginform = new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
    checked:new FormControl('')
  })

  getvalue(event:any){
    this.value = event.target.value;  
  }

  getformvalue(){
    console.log(this.loginform.value)
  }
ngOnInit(){
 
}
senddata(){
  let data = {name:'shailendra',age:26}
  this.parentfunction.emit(data)
}


}
