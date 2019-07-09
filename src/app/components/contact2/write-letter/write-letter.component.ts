import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseLinksService } from 'src/app/services/firebase-links.service';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.css']
})
export class WriteLetterComponent implements OnInit {
// ** User Form
report = {
  name: null,
  email: null,
  phone: null,
  message: null
};
// ********

  // ** Error
  error = false;
  title = '';
  message2 = '';
  color = '';
  // ********
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(
    private afs: AngularFirestore,
    public _linkService: FirebaseLinksService
  ) {
    this.itemsCollection = this.afs.collection<Mensaje>('portafolio');
  }

  ngOnInit() {
  }

  showError(message2: string, color: string) {
    this.message2 = message2;
    this.color = color;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

  addMessage( forma: NgForm) {
    if (forma.valid) {
      let mensaje: Mensaje = {
        nombre: this.report.name,
        email: this.report.email,
        fecha: new Date().getTime(),
        phone: this.report.phone,
        message: this.report.message
      };
      return this.itemsCollection.add( mensaje )
        .then(() => {
          this.showError('Thanks, your message has been sent successfully.', 'success');
          forma.resetForm();
        })
        .catch((err) => {
          this.showError(err , 'danger');
        });
    }
  }

}


export interface Mensaje {
  nombre: string;
  email: string;
  fecha: number;
  phone: string;
  message: string;
}