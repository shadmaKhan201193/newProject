import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityServiceService } from '../city-service.service';
import { Cityclass } from '../cityclass';

@Component({
  selector: 'app-city-crud',
  templateUrl: './city-crud.component.html',
  styleUrls: ['./city-crud.component.css']
})
export class CityCrudComponent implements OnInit {
  cityclass: Cityclass=new Cityclass();
  alert:any;
  status:any;
  errorMessage:any;
 
  constructor(private router: Router,private cityService:CityServiceService) { }


  ngOnInit(): void {
  }
  AddCity(){
    console.log(this.cityclass);
    this.cityService.AllCity(this.cityclass)
    .subscribe({
      next: data => {
        console.log("data save successfully")
          //this.status = 'save successful';


      },
      error: error => {
          this.errorMessage = error.message;
          console.error('data save successfully');
          this.alert=true;


      }
  });
      
    //this.router.navigate(['country']);
    
}

CloseAlert(){
  this.alert=false;
}

}