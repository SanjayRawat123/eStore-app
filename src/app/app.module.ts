import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './home/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatnavigationComponent } from './home/components/catnavigation/catnavigation.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
