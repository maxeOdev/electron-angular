import { Component, OnInit } from '@angular/core';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  constructor(private videoService: VideosService) {}

  ngOnInit() {}

  onClick() {
    this.videoService.downloadVideo();
  }
}
