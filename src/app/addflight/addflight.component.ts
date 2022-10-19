import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor() { }
  flight_name=""
  origin=""
  destination=""
  capacity=""
  readvalues=()=>{
    let data={
      "fligh_tname":this.flight_name,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
