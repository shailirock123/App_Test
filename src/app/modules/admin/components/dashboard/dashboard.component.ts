import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  currentitem ='television';

  user = [{name:'rahul',age:24},
  {name:'rajesh',age:26},
  {name:'vinay',age:27},
  {name:'mehul',age:29}
  
  
]
constructor(){}

ngOnInit(): void {
  console.log(this.user)
}
}
