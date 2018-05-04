import { Component, OnInit } from '@angular/core';
import { Dev } from '../shared/models/dev.model';
import { DevService } from '../services/dev.service';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
})
export class BracketComponent implements OnInit {
  dev = new Dev();
  devs: Dev[] = [];
  isLoading = true;
  constructor(private devService: DevService) { }

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

  getDevsFromTeam(team: string) {
    return this.devs.filter(dev => dev.team === team);
  }
}
