import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childprocess from 'child_process';
import * as fs from 'fs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childprocess: typeof childprocess;
  fs: typeof fs;

  private downloadUrl = 'http://localhost:8083/api/download';
  private uuid = 'd0399a6b-1fbe-4d4d-acff-55db57a709dd';

  constructor(private httpClient: HttpClient) {
    this.ipcRenderer = window.require('electron').ipcRenderer;
    this.webFrame = window.require('electron').webFrame;
    this.remote = window.require('electron').remote;

    this.childprocess = window.require('child_process');
    this.fs = window.require('fs');
  }

  downloadVideo() {
    console.log('service check');
    this.ipcRenderer.send(
      'downloadfile',
      this.downloadUrl + '/?uuid=' + this.uuid
    );
  }
}
