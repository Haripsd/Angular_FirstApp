import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public httpClient:HttpClient) { }

  public getCountryList<Observable>() {
    let dataUrl:string = `https://api.countrylayer.com/v2/all?access_key=8f9ee81650858d1d35fbb31b20fb1210`;
    return this,this.httpClient.get(dataUrl);
  }
}
