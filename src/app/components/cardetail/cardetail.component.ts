import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit{
  carsdetail:Car[]=[];
  imageUrl = "https://localhost:44386/uploads/images/"
  carImages:CarImage[] = [];
  currentCar:Car
  currentImage: CarImage;
  dataLoaded = false;
  
   constructor(private carDetailService: CardetailService, private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.getCarById(params["carId"])
      })
    }

    getImagePath(carImage: CarImage) {
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
    
    getCars(){
      this.carDetailService.getCars(). subscribe((response)=>{
        this.carsdetail=response.data
        this.dataLoaded=true;
        
      })
    }
    getCarById(id:number) {
      this.carDetailService.getCarById(id).subscribe(response => {
      this.carsdetail = response.data;
      this.dataLoaded = true;
      })
    }

    getCurrentImageClass(image: CarImage) {
      if (this.carImages[0] == image) {
        return 'carousel-item active';
      } else {
        return 'carousel-item ';
      }
    }
  
    setCurrentImageClass(image: CarImage) {
      this.currentImage = image;
      this.dataLoaded=true;
  
    }
  
  setCurrentCar(car:Car){
    this.currentCar=car;
  }
}
