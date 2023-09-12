import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { DrawComponent } from './draw/draw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
