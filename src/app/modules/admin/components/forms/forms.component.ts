import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
 @Input()  item ='';

 @Input() hero:any
 constructor(){

 }

 ngOnInit(): void {
   console.log(this.hero)
 }
}
