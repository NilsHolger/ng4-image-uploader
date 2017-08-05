import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APPROUTES } from '../routes';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationGuard } from './services/authenticationguard.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTES),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, ImageService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
