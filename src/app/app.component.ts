import { Component } from '@angular/core';
import { FirebaseLinksService } from './services/firebase-links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolioAngular';
  constructor(public _linkService: FirebaseLinksService) {
    _linkService.loadLinks();
  }
}
