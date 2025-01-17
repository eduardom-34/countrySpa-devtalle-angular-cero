import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,

    SharedModule,
  ],
  providers: [
    // HttpClient,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
