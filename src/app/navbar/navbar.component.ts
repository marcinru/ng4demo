import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: '<header><h1 class="display-4">{{title}}</h1><hr></header>',
  styles: ['header { margin: 2rem 0; }']
})
export class NavbarComponent {
  title = 'SPN demo app';
}
