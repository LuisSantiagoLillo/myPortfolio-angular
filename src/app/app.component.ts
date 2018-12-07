import { Component, OnInit } from '@angular/core';
import { FirebaseLinksService } from './services/firebase-links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolioAngular';

  constructor(public _linkService: FirebaseLinksService) {
    _linkService.loadLinks();
  }

  ngOnInit() {}

}
