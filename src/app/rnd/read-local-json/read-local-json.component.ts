import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { 
  ConfigService,
  SettingsService 
} from './../index';

@Component({
  selector: 'app-read-local-json',
  templateUrl: './read-local-json.component.html',
  styleUrls: ['./read-local-json.component.css']
})
export class ReadLocalJsonComponent implements OnInit {

  name = 'Test display JSON file';
  data: any;
  constructor(private config: ConfigService, public setting: SettingsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.name = this.setting.snippet;
    //console.log(this.setting.snippet);
    this.config.getData()
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}