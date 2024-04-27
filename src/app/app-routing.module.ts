import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AboutMethodsComponent } from './components/aboutmethods/aboutmethods.component';
import { CoupleComponent } from './components/couple/couple.component';
import { OneOnOneComponent } from './components/oneonone/oneonone.component';
import { VideosComponent } from './components/videos/videos.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'aboutthemethods',
    component: AboutMethodsComponent,
  },
  {
    path: 'couple',
    component: CoupleComponent,
  },
  {
    path: 'oneonone',
    component: OneOnOneComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
