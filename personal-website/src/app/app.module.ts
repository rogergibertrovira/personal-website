import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CardPersonalWebComponent } from './card-personal-web/card-personal-web.component';
import { CardWeatherWebComponent } from './card-weather-web/card-weather-web.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CardPersonalWebComponent,
    CardWeatherWebComponent,
    SideMenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
