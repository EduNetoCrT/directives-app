import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {


  showName = false;
  showEmail = false
  showCelular =false
  constructor() { }

  ngOnInit(): void {
  }

}
