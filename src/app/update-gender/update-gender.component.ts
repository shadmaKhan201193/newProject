import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenderServiceService } from '../gender-service.service';
import { Genderclass } from '../genderclass';

@Component({
  selector: 'app-update-gender',
  templateUrl: './update-gender.component.html',
  styleUrls: ['./update-gender.component.css']
})
export class UpdateGenderComponent implements OnInit {
  alert:any;
  genderclass: Genderclass=new Genderclass();

  constructor(private router:Router,private genderService:GenderServiceService) { }

  ngOnInit(): void {
    this.getGenderByID();

  }

  getGenderByID()
  {
    this.genderService.GetGenderById().subscribe((data: any) => {
      this.genderclass = data;
    })

  }
  UpdateGender(id?:number){
    console.log(this.genderclass);
    this.genderService.UpdateGenderById(this.genderclass)
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

