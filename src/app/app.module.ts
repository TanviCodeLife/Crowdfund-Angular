import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DonateComponent } from './donate/donate.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
     AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
