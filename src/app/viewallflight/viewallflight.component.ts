import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallflight',
  templateUrl: './viewallflight.component.html',
  styleUrls: ['./viewallflight.component.css']
})
export class ViewallflightComponent implements OnInit {

  constructor() { }
  root=[{"id":1,"flight_name":"air india","origin":"india","destination":"austrlia","capacity":300},{"id":2,"flight_name":"air-austrlia","origin":"austrlia","destination":"india","capacity":400},{"id":3,"flight_name":"air-africa","origin":"africa","destination":"pakistan","capacity":200},{"id":4,"flight_name":"fisher bull","origin":"oman","destination":"africa","capacity":500}]
  ngOnInit(): void {
  }

}
