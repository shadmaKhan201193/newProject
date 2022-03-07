import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenderServiceService } from '../gender-service.service';
import { Genderclass } from '../genderclass';

@Component({
  selector: 'app-gender-crud',
  templateUrl: './gender-crud.component.html',
  styleUrls: ['./gender-crud.component.css']
})
export class GenderCrudComponent implements OnInit {

  constructor(private router: Router,private genderService:GenderServiceService) { }
  genderclass: Genderclass=new Genderclass();
  status:any;
  alert:any;
  errorMessage:any;


  ngOnInit(): void {
  }
  AddGender(){
    console.log(this.genderclass);
    this.genderService.AllGender(this.genderclass)
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

