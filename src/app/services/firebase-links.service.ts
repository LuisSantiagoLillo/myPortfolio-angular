import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseLinksService {
  private itemsCollection: AngularFirestoreCollection<Link>;
  public arrayLinks: Link[] = [];

      constructor(private afs: AngularFirestore) {
        this.itemsCollection = this.afs.collection<Link>('links');
    }


    loadLinks() {
      return this.itemsCollection.valueChanges().subscribe( (links: Link[]) => {
        this.arrayLinks = links;
      });
    }

}



export interface Link {
  site: string;
  link: string;
}