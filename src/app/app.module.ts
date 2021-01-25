import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './shared/component/card/card.component';
import { BoxListComponent } from './shared/component/box-list/box-list.component';
import { CardGroupComponent } from './shared/component/card-group/card-group.component';
// Services
import {UrlService, HttpService} from './common/services';
import {StudentService, TeacherService, DistrictService} from './common/services';
import { ProfileComponent } from './pages/profile/profile.component';
import { CssLearn3Component } from './rnd/css-learn3/css-learn3.component';
import { RndComponent } from './rnd/rnd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PageNotFoundComponent,
    CardComponent,
    BoxListComponent,
    CardGroupComponent,
    ProfileComponent,
    CssLearn3Component,
    RndComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UrlService,
    HttpService,
    StudentService,
    TeacherService,
    DistrictService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
