import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.css']
})
export class ViewGeneralComponent implements OnInit {
    data: number = 1000000.588;
    title: string = 'Mis Creditos_IPVT87';
    today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }



}
