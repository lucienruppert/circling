import { DialogRef } from '@angular/cdk/dialog';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrl: './show-video.component.css',
})
export class ShowVideoComponent {
  public id: string = 'pVJFjWSB_as';
  public width: number = 0;
  public height: number = 0;

  constructor(public dialogRef: DialogRef) {
    this.setPlayerSize();
  }

  setPlayerSize(): void {
    let screenSizeFactor = 0.5;
    if (window.screen.width <= 768) screenSizeFactor = 0.9;
    this.width = window.screen.width * screenSizeFactor;
    const aspectRatio = 9 / 16;
    this.height = this.width * aspectRatio;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
