import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { DevService } from '../services/dev.service';
import { Dev } from '../shared/models/dev.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  dev = new Dev();
  devs: Dev[] = [];
  isLoading = true;

  constructor(private devService: DevService, public auth: AuthService) { }
  ngOnInit() {
    this.getDevs();
  }
  getDevs() {
    this.devService.getDevs().subscribe(
      data => this.devs = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
