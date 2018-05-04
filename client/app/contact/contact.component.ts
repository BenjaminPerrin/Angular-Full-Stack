import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  lat = 48.473821;
  long = 1.01192;
  constructor() { }

  ngOnInit() {
  }

}
