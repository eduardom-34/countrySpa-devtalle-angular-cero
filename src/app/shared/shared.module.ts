import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    AboutPageComponent,
    HomePageComponent,
  ]
})
export class SharedModule { }
