import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class AppService {
    constructor(private http : HttpClient) { }

    getStates(){
        return this.http.get("https://api.covid19india.org/v2/state_district_wise.json");
    }

    getCaseCount(){
        return this.http.get("https://api.rootnet.in/covid19-in/stats/latest");
    }
}


