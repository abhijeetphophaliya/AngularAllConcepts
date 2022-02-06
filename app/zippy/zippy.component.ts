import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  isEpanded : boolean =false;
  @Input('title') title: string="";

  toggle(){
    console.log('in exepanded ' + this.isEpanded );
    this.isEpanded = !this.isEpanded;
  }
}
