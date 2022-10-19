import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private api:ApiService) { }
  flight_name=""
  origin=""
  destination=""
  capacity=""
  readvalues=()=>{
    let data={
      "flight_name":this.flight_name,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
    this.api.addflight(data).subscribe(
      (data)=>{
        alert("data insert successfully")
      }
    )

  }
  ngOnInit(): void {
  }

}
