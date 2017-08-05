import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { UploadComponent } from './app/upload/upload.component';
import { LoginComponent } from './app/login/login.component';
import { AuthenticationGuard } from './app/services/authenticationguard.service';

export const APPROUTES: Routes = [
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard] },
  {path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard] },
  {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard] },
  {path: '', redirectTo: '/gallery', pathMatch: 'full' },
  {path: 'login', component: LoginComponent }
];
