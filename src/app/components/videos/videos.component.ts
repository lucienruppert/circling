import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ShowVideoComponent } from '../show-video/show-video.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  constructor(private dialog: Dialog) {}

  public openDialog(): void {
    this.dialog.open(ShowVideoComponent);
  }
}
