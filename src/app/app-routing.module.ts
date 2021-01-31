import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent} from './pages/district/district.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RndComponent } from './rnd/rnd.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'landing', component: LandingComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent  },
  { path: 'rnd', component: RndComponent  },
  { path: 'district', component: DistrictComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'json' },
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
