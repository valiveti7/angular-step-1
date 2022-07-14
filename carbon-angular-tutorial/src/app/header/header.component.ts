import { Component, OnInit } from '@angular/core';
import {  HostBinding } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.cds--header') HeaderComponent = true;
  constructor() { }

  ngOnInit(): void {
  }

}
