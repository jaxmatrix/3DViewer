import { LabelMapService } from './services/label-map.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    ViewerComponent,
    LabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ViewerComponent
  ],
  providers : [LabelMapService]
})
export class Viewer3dModule { }
