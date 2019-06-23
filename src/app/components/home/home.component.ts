import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  num_lista = 1;
  num = 0;
  cont = 0;

// ANGULAR PARTICLES
particlesStyle = {};
particlesParams = {};
particlesWidth = 100;
particlesHeight = 100;



  constructor() {

  }

  ngOnInit() {
    //ANGULAR PARTICLES        'z-index': -1,
    this.particlesStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };

    this.particlesParams = {
      particles: {
        number: {
          value: 100
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle'
        }
      }
    };
    //  ******************************  //

     setInterval(() => {
       this.lista_activa();
     }, 2000);


     setInterval(() => {
      this.escribir_webSites();
    }, 250);
  }


  comenzar() {
    setInterval(this.escribir_webSites(), 250);
    setInterval(this.lista_activa(), 2000);
}


  escribir_webSites() {
    const webSites = new Array('W', 'e', 'b', ' ', 'S', 'i', 't', 'e', 's', '.', '', '', '', '', '', '');
    const webApplicatios = new Array('W', 'e', 'b', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's', '.', '', '', '', '', '', '', '');
    const userInterfaces = new Array('U', 's', 'e', 'r', ' ', 'I', 'n', 't', 'e', 'r', 'f', 'a', 'c', 'e', 's', '.', '', '', '', '', '', '', '');

    if (this.cont === 0) {
        document.getElementById('message').innerHTML += webSites[this.num];
        this.num++;
        if (this.num === webSites.length - 1) {
            document.getElementById('message').className = 'display-3 text-white bg-dark';
        }
        if (this.num === webSites.length) {
          this.num = 0;
            document.getElementById('message').innerHTML = ' ';
            document.getElementById('message').className = 'display-3 text-white';
            this.cont++; // SUMAR CONTADOR EXCEPTO EL ULTIMO QUE LO PONDRA A 0
        }
    }

    if (this.cont === 1) {
        document.getElementById('message').innerHTML += webApplicatios[this.num];
        this.num++;
        if (this.num === webApplicatios.length - 1) {
            document.getElementById("message").className = 'display-3 text-white bg-dark';
        }
        if (this.num === webApplicatios.length) {
          this.num = 0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            this.cont++;
        }
    }

    if (this.cont === 2) {
        document.getElementById("message").innerHTML += userInterfaces[this.num];
        this.num++;
        if (this.num === userInterfaces.length - 1) {
            document.getElementById("message").className = 'display-3 text-white bg-dark';
        }
        if (this.num === userInterfaces.length) {
          this.num = 0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            this.cont = 0; // EL ULTIMO SIEMPRE PONE A CERO EL CONTADOR
        }
    }


}

 lista_activa() {
    this.num_lista++;
    if (this.num_lista === 1) {
        document.getElementById('li1').className = 'list-group-item active';
        document.getElementById('li2').className = 'list-group-item';
        document.getElementById('li3').className = 'list-group-item';
    }
    if (this.num_lista === 2) {
        document.getElementById('li1').className = 'list-group-item';
        document.getElementById('li2').className = 'list-group-item active';
        document.getElementById('li3').className = 'list-group-item';
    }
    if (this.num_lista === 3) {
        document.getElementById('li1').className = 'list-group-item';
        document.getElementById('li2').className = 'list-group-item';
        document.getElementById('li3').className = 'list-group-item active';
    }

    if (this.num_lista === 3) { this.num_lista = 0; }

}





}

