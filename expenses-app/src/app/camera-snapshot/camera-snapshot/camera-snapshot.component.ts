import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PrefilledExpenseService} from "../../services/prefilled-expense.service";

@Component({
  selector: 'app-camera-snapshot',
  templateUrl: './camera-snapshot.component.html',
  styleUrls: ['./camera-snapshot.component.css']
})
export class CameraSnapshotComponent implements AfterViewInit {

  WIDTH = 640;
  HEIGHT = 480;

  @ViewChild("video")
  public video: ElementRef;

  error: any;
  stream: MediaStream;

  constructor(private prefilledExpenseService: PrefilledExpenseService) { }

  async ngAfterViewInit() {
    await this.setupDevices();
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (this.stream) {
          this.video.nativeElement.srcObject = this.stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
        console.log(e);
      }
    }
  }

  capture() {
    // TODO:
    this.prefilledExpenseService.setExpense({ amount: 555, category: "My Favorite", date: "12.09.2021"});

    this.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
    window.location.href = '/form';
  }

}
