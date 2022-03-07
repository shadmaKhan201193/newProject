import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityServiceService } from '../city-service.service';
import { Cityclass } from '../cityclass';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  p: number=1;
  cityclass:Cityclass[]=[];

  constructor(private router: Router,private cityService: CityServiceService)
   { }

  ngOnInit(): void {
    this.getAllCity();

  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getAllCity() {
    this.cityService.getAllCity().subscribe((data: any) => {
      this.cityclass = data.city;
    })
  }
  UpdateCityRecords(cityId?:number){
    console.log("id =",cityId)
    this.cityService.getId(cityId);
    this.router.navigate(['updatecity'])
    
  }

}
