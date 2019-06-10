import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jamaica Java Cafe';



  constructor (
    private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
          this.matIconRegistry.addSvgIcon(
              'coffeesvg',
              this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/coffeesvg.svg')
          );
      }
}
