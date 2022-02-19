import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compApp';
  comp1: boolean = false;
  comp2: boolean = false;
  comp3: boolean = false;
  comp4: boolean = false;
  comp5: boolean = false;


  toggleComp(n) {
    if (n == 1) {
      this.comp1 = true;
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
    } else if (n == 2) {
      this.comp1 = false;
      this.comp2 = true;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
    } else if (n == 3) {
      this.comp1 = false;
      this.comp2 = false;
      this.comp3 = true;
      this.comp4 = false;
      this.comp5 = false;
    } else if (n == 4) {
      this.comp1 = false;
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = true;
      this.comp5 = false;
    } else {
      this.comp1 = false;
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = true;
    }
  }
}
