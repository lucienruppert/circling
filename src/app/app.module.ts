import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { VideosComponent } from './components/videos/videos.component';
import { EventsComponent } from './components/events/events.component';
import { AboutMethodsComponent } from './components/aboutmethods/aboutmethods.component';
import { OneOnOneComponent } from './components/oneonone/oneonone.component';
import { CoupleComponent } from './components/couple/couple.component';
import { MaterialModules } from './material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    VideosComponent,
    EventsComponent,
    AboutMethodsComponent,
    OneOnOneComponent,
    CoupleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
