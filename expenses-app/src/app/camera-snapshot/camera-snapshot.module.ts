import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CameraSnapshotComponent} from './camera-snapshot/camera-snapshot.component';


@NgModule({
  declarations: [CameraSnapshotComponent],
  imports: [CommonModule],
  exports: [CameraSnapshotComponent]
})
export class CameraSnapshotModule {
}
