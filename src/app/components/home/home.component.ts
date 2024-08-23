import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dittoUrl: string ="https://c.tenor.com/ws8LPc8PuQ0AAAAC/ditto-dance.gif";

  constructor() {}

  ngOnInit(): void {}
}
