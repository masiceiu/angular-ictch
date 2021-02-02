import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent} from './pages/district/district.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RndComponent } from './rnd/rnd.component';
import { ReadLocalJsonComponent } from './rnd/read-local-json/read-local-json.component';
import { ImageCropperTestComponent } from './rnd/image-cropper-test/image-cropper-test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'landing', component: LandingComponent},
  { path: 'about', component: AboutComponent  },
  { path: 'profile', component: ProfileComponent},
  { path: 'district', component: DistrictComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'rnd', component: RndComponent  },
  { path: 'profile', component: ProfileComponent},
  { path: 'local-json', component: ReadLocalJsonComponent},
  { path: 'cropper-test', component: ImageCropperTestComponent},
  
  { path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
