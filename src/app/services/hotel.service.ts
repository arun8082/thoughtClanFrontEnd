import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

    public baseurl = "http://localhost:7072";
    public dashboardLink: string;
    public dashboardName: string;
    constructor(private http: Http) { }


    getHotelsList() {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        return this.http.get(this.baseurl + "/getAll",{ headers: headers });
    }

    searchHotels(hotelName){
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        return this.http.get(this.baseurl + "/getAll/"+hotelName,{ headers: headers });
    }

    sortHotels(type){
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        return this.http.get(this.baseurl + "/getAllsorted/"+type,{ headers: headers });
    }

}