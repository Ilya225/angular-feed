import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: 
  [
    './app.component.css',
  ]
})
export class AppComponent implements OnInit {
  title = 'App';

  constructor(private titleService :Title) {}

  getTitle() :string {
    return this.titleService.getTitle();
  }

  setTitle(newTitle :string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() :void {
    this.setTitle(this.title);
  }
}
