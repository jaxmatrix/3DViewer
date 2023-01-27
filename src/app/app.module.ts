import { Viewer3dModule } from './viewer3d/viewer3d.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewportComponent } from './viewport/viewport.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    Viewer3dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
