import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme: boolean = false;

  currentDate = new Date().toLocaleDateString('de-DE', {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  switchTheme() {
    this.theme = !this.theme;
  }
}
