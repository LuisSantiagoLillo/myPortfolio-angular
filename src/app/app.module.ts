import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Angular Form
// ** Angular Particules
import { ParticlesModule } from 'angular-particle';
// **************************
// ** Modules Angular Fire 2
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// **************************
import { environment } from '../environments/environment';

// CHARTS
import { ChartsModule } from 'ng2-charts';
// GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FirebaseLinksService } from './services/firebase-links.service';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about/about-me/about-me.component';
import { Contact2Component } from './components/contact2/contact2.component';
import { WriteLetterComponent } from './components/contact2/write-letter/write-letter.component';
import { MapLocationComponent } from './components/contact2/map-location/map-location.component';
import { TextLocationComponent } from './components/contact2/text-location/text-location.component';
import { WriteLetter2Component } from './components/contact2/write-letter2/write-letter2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    AboutMeComponent,
    Contact2Component,
    WriteLetterComponent,
    MapLocationComponent,
    TextLocationComponent,
    WriteLetter2Component

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ParticlesModule,
    AngularFireModule.initializeApp(environment.firebase), // Angular Fire 2
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEK0Un_V9ib9RyulE9f3I3dh01_VheOeE'
    })
  ],
  providers: [
    FirebaseLinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
