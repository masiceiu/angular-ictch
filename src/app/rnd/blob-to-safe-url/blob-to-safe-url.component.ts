import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blob-to-safe-url',
  templateUrl: './blob-to-safe-url.component.html',
  styleUrls: ['./blob-to-safe-url.component.css']
})
export class BlobToSafeUrlComponent implements OnInit {

    ngOnInit() {
      this.loadImage().subscribe(i=>
      {
        this.image = i
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
      })
  }
  URL: string = `https://fireflysemantics.github.io/i/service-parts-help/electrocardiogram-36732.png`;
  image:Blob
  imageURL:SafeUrl

  constructor(private h:HttpClient, private sanitizer: DomSanitizer) {
  }

  loadImage():Observable<Blob> {
      return this.h.get(this.URL, {
      responseType: "blob"
      });
  }
}