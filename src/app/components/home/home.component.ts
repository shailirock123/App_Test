import { Component ,Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import{FormControl,FormGroup}from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{
  
  value ='hello';
  loginform:any;
  @Output() parentfunction:EventEmitter<any> = new EventEmitter()
  constructor(){

  }
  // loginform = new FormGroup({
  //   user:new FormControl(''),
  //   password:new FormControl(''),
  //   checked:new FormControl('')
  // })

  getvalue(event:any){
    this.value = event.target.value;  
  }

  getformvalue(event:any){
    console.log(event)
  }
ngOnInit(){
 
}
senddata(){
  let data = {name:'shailendra',age:26}
  this.parentfunction.emit(data)
}

ngOnDestroy(): void {
  console.log('component destroyed')
}


}
