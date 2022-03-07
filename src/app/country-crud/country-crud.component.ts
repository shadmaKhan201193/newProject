import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDemo } from '../country-demo';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-country-crud',
  templateUrl: './country-crud.component.html',
  styleUrls: ['./country-crud.component.css']
})
export class CountryCrudComponent implements OnInit {
 countryDemo: CountryDemo=new CountryDemo();
 status:any;
 alert:any;
 errorMessage:any;;

  constructor(private router: Router,private employeeservice:EmployeeService) { }

  ngOnInit(): void {
  }
 
  AddCountry(){
    console.log(this.countryDemo);
    this.employeeservice.AllCountry(this.countryDemo)
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
