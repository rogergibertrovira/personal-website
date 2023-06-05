import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  hiddenMenu: boolean = false;

  showMenu() {
    this.hiddenMenu = true;
  }

  hideMenu() {
    this.hiddenMenu = false;
  }
}
