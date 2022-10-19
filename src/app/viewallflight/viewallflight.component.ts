import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallflight',
  templateUrl: './viewallflight.component.html',
  styleUrls: ['./viewallflight.component.css']
})
export class ViewallflightComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewallflights().subscribe(
      (data)=>{
        this.root=data
      }
    )
  }
  root:any=[]
  ngOnInit(): void {
  }

}
