import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RndComponent } from './rnd.component';;
import { CssLearn3Component } from './css-learn3/css-learn3.component';

import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { ImageCropperTestComponent } from './image-cropper-test/image-cropper-test.component';
import { 
  ConfigService, 
  SettingsService 
} from './index';
import { ReadLocalJsonComponent } from './read-local-json/read-local-json.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { MagnifierComponent } from './magnifier/magnifier.component';
import { SubscriptionTestComponent } from './subscription-test/subscription-test.component';
import { MyBootstrap4Component } from './aysha-design/my-bootstrap4/my-bootstrap4.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ImageCropperModule
  ],
  declarations: [
    RndComponent,
    CssLearn3Component, 
    ReadLocalJsonComponent, 
	  ImageCropperTestComponent, 
    ImageZoomComponent, 
    MagnifierComponent, 
    SubscriptionTestComponent, MyBootstrap4Component
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ImageCropperModule,
    ReadLocalJsonComponent, 
    ImageCropperTestComponent
  ],
  providers: [ConfigService, SettingsService],

})
export class RndModule { }