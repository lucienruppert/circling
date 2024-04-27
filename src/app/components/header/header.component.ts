import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public showHamburger: boolean = true;

  public toggleMenu(): void {
    this.showHamburger = !this.showHamburger;
  }
}
