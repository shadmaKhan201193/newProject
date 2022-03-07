import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityServiceService } from '../city-service.service';
import { Cityclass } from '../cityclass';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {
  alert:any;
  cityclass: Cityclass=new Cityclass();

  constructor(private router:Router,private cityService:CityServiceService) { }

  ngOnInit(): void {
    this.getCityByID();
  }

  getCityByID()
  {
    this.cityService.GetCityById().subscribe((data: any) => {
      this.cityclass = data;
    })

  }
  UpdateCity(id?:number){
    console.log(this.cityclass);
    this.cityService.UpdateCityById(this.cityclass)
    . subscribe({
      
      error: error => {
          console.error('data updated successfully');
          this.alert=true;
      }
  });
    //this.router.navigate(['country']) abhi
} 

CloseAlert(){
  this.alert=false;
}


}
