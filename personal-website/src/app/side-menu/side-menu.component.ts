import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  @Output() onHide = new EventEmitter<boolean>();

  hideMenu(){
    this.onHide.emit();
  }
}
