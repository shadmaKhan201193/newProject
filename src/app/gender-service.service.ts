import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genderclass } from './genderclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderServiceService {
  baseURL="http://172.21.0.61:8989/masterService/gender/list/authorized" ;
  baseURL2="http://172.21.0.61:8989/masterService/gender/createGender" ;
  baseURL3="http://172.21.0.61:8989/masterService/gender/id" ;
  baseURL4="http://172.21.0.61:8989/masterService/gender/updateGender" ;
  baseURL5="http://172.21.0.61:8989/masterService/gender/deleteCountry" ;

     id?:number;
     

  constructor(private httpClient:HttpClient) { }
  
getAllGender():Observable<Genderclass[]>{
  return this.httpClient.get<Genderclass[]>(`${this.baseURL}`);
}

AllGender(gender?:Genderclass):Observable<object[]>{
  return this.httpClient.post<object[]>(`${this.baseURL2}`,gender);
}

getId(genderId?:number){
this.id=genderId;
}
GetGenderById():Observable<object>{
  return this.httpClient.get<object[]>(`${this.baseURL3}/${this.id}`);

}
UpdateGenderById(genderclass?:Genderclass):Observable<object>{
return this.httpClient.post<object>(`${this.baseURL4}`,genderclass)
}
}