import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44386/api/";
  constructor(private httpClient:HttpClient) { }

getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getall"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarsByColor(colorName:string):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getbycolor?colorName="+colorName
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
}
