import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CommonService } from '../services/hotel.service';

@Component({
  selector: 'app-hotels',
  styleUrls: ['./hotels.component.css'],
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {
  public dataSource;
  public key="";
  public selectedoption="ASC";

  constructor(private http: Http, private commonService: CommonService) { }


  ngOnInit() {
    this.dataSource = this.commonService.getHotelsList().subscribe(result => {
      this.dataSource = result.json();
    });
  };

  search(){
    this.commonService.searchHotels(this.key).subscribe(result => {
      this.dataSource = result.json();
    });
  }

  sortBy(){
    if(this.selectedoption=="Select Option"){
      this.commonService.sortHotels("ASC").subscribe(result => {
        this.dataSource = result.json();
      });
    }else if(this.selectedoption == "Low To High"){
      this.commonService.sortHotels("ASC").subscribe(result => {
        this.dataSource = result.json();
      });
    }else if(this.selectedoption == "High To Low"){
      this.commonService.sortHotels("DESC").subscribe(result => {
        this.dataSource = result.json();
      });
    }
  }

}
