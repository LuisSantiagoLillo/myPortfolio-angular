import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseLinksService } from 'src/app/services/firebase-links.service';

@Component({
  selector: 'app-write-letter2',
  templateUrl: './write-letter2.component.html',
  styleUrls: ['./write-letter2.component.css']
})
export class WriteLetter2Component implements OnInit {
// ** User Form
report = {
  name: null,
  email: null,
  message: null
};
// ********

  // ** Error
  error = false;
  title = '';
  message2 = '';
  color = '';
  // ********

  badge_name = true;
  badge_email = false;
  badge_text = false;

  input_name = true;
  input_email = false;
  input_text = false;

  name1 = 'Name';
  email1 = 'Email';
  text1 = 'Text';

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
  message: string;
}