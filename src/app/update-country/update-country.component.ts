import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDemo } from '../country-demo';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {
  countryDemo: CountryDemo=new CountryDemo();
alert:any;
  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getCountryByID();
  }

  getCountryByID()
  {
    this.employeeService.GetCountryById().subscribe((data: any) => {
      this.countryDemo = data;
    })

  }

  UpdateCountry(id?:number){
    console.log(this.countryDemo);
    this.employeeService.UpdateCountryById(this.countryDemo)
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
