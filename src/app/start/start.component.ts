import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  display = false;
  clicked = false;

  getSearchbar(): void {
    /* if(!this.clicked){
    console.log("searchbar opens");
    this.display = true;
    this.clicked = true;
    }else{
      this.display = false;
      this.clicked = false;
    }
 */
  } 

  ngOnInit(): void {
  }

}
