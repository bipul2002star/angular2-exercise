/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { TextService } from './text.service';
//import { Router } from "@angular/router";

import { TextReader } from './text-reader';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  providers: [ TextService ],
  styleUrls: [ './app.style.css' ],
  directives: [ TextReader ],
  template: "<textReader></textReader>"
  /*template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./text'] ">
          Text
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `*/
})
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(private textService: TextService) {

  }

  ngOnInit() {
    //console.log('Initial App State', this.appState.state);
    //this.router.navigate(['home']);
  }

}
