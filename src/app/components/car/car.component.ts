import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  apiUrl = "https://localhost:44386/api/cars/getall";
dataLoaded=false;


 constructor(private carService:CarService,
  private activatedRoute:ActivatedRoute) {}

 ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"])
    {
      this.getCarsByBrand(params["brandId"])
    }
    else if(params["colorName"])
    {
      this.getCarsByColor(params["colorName"])
    }
    else
    {
      this.getCars()
    }
})
 }

 getCars() {
  this.carService.getCars().subscribe(response=>{
  this.cars=response.data
  this.dataLoaded=true
});
 }

 getCarsByBrand(brandId:number) {
  this.carService.getCarsByBrand(brandId).subscribe(response=>{
    this.cars=response.data
    this.dataLoaded=true
  });
   }

   getCarsByColor(colorName:string) {
    this.carService.getCarsByColor(colorName).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    });
     }
}
