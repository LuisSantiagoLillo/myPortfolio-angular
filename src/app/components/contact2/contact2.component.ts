import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {
  flag = true;

  constructor() { }

  ngOnInit() {
  }

  hideButton(): void {
    const button = document.getElementById('buttonWriteLetter');
    button.className = 'hinge';
    setTimeout(()=>{
      button.remove();
    },1900);
    setTimeout(() => {
      const divSpace = document.getElementById('div-space');
      // const divMap = document.getElementById('app-map');
      const divTextLocation = document.getElementById('app-text-location');
      divSpace.remove();
      // divMap.className = 'container-newDiv-0 animated fadeIn';
      // divTextLocation.className = 'container-newDiv-0 animated bounceInRight';
      divTextLocation.className = 'container-newDiv-0 animated zoomInUp col-md-8';


      const divWriteLetter = document.getElementById('app-write-letter');
      // divWriteLetter.className = 'container-newDiv-0 animated bounceInRight';
      divWriteLetter.className = 'container-newDiv-0 animated zoomInDown col-md-4 mt-5';

    }, 3000);
    /*
    setTimeout(() => {
      const divWriteLetter = document.getElementById('app-write-letter');
      // divWriteLetter.className = 'container-newDiv-0 animated bounceInRight';
      divWriteLetter.className = 'container-newDiv-0 animated fadeIn';
    }, 4500);
    */
  }

}
