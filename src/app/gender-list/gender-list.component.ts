import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenderServiceService } from '../gender-service.service';
import { Genderclass } from '../genderclass';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {
  p: number=1;
  genderclass:Genderclass[]=[];

  constructor(private router: Router,private genderService: GenderServiceService)
   { }

  ngOnInit(): void {
    this.getAllgender();
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getAllgender() {
    this.genderService.getAllGender().subscribe((data: any) => {
      this.genderclass = data.gender;
    })
  }
  
  UpdateGenderRecords(genderId?:number){
    console.log("id =",genderId)
    this.genderService.getId(genderId);
    this.router.navigate(['updategender'])
    
  }

}


