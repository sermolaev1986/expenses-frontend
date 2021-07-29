import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PrefilledExpenseService} from "../../services/prefilled-expense.service";
import {Expense} from "../../Expense";

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

  constructor(private prefilledExpenseService: PrefilledExpenseService) {
  }

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
    let expense = new Expense();
    expense.category = "My Favorite";
    expense.amount = 555;
    expense.date = "12.09.2021";

    this.prefilledExpenseService.setExpense(expense);
    if (this.stream) {
      this.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
    }
    window.location.href = '/form';
  }

}
