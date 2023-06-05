import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  hiddenMenu: boolean = false;

  showMenu() {
    this.hiddenMenu = true;
  }

  hideMenu() {
    this.hiddenMenu = false;
  }
}
