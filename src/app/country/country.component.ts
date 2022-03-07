import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { CountryDemo } from '../country-demo';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  p: number=1;
  //countrydemo?: CountryDemo[];
  countrydemo:CountryDemo[]=[];
  constructor(private router: Router, private employeeService: EmployeeService) {
  }
  ngOnInit(): void {
    this.getAllCountrys();
    
  }
  getAllCountrys() {
    this.employeeService.getAllCountry().subscribe((data: any) => {
      this.countrydemo = data.country;
    })

  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  UpdateCountryRecords(countryId?:number){
    console.log("id =",countryId)
    this.employeeService.getId(countryId);
    this.router.navigate(['updatecountry'])
    
  }

  DeleteCountryRecords(countryId?:any){
    this.employeeService.deleteCountryById(countryId).subscribe();
    this.router.navigate(['country'])
     //window.location.reload();
  }
  

}


