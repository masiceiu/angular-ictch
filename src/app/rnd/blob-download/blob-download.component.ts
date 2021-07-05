import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blob-download',
  templateUrl: './blob-download.component.html',
  styleUrls: ['./blob-download.component.css']
})
export class BlobDownloadComponent implements OnInit {

  name = 'Angular 5';
  fileUrl;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}