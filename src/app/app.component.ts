import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';

 /*  scrHeight:any;
    scrWidth:any;

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?: Event) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          console.log(this.scrHeight, this.scrWidth);
    }
 */

    // Constructor
    constructor() {
     /*    this.getScreenSize(); */
    }
}
