import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  darkTheme: boolean = false;

  switchTheme() {
    this.darkTheme = !this.darkTheme;
  }

  constructor() {}
}
