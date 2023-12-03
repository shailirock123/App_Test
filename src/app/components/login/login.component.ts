import { Component } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { filter } from 'rxjs';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   public jasonvalue:any
   constructor(private http:HttpClient){

   }

  getdata(){
    let data = 
    {name:'rahul',
  age:23}
    this.http.post('https://jsonplaceholder.typicode.com/posts',{data}).subscribe((response)=>{
      console.log(response);
      
      // this.jasonvalue = response;
      
    })
  }
}
