import { Injectable } from '@angular/core';
import { Cityclass } from './cityclass';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {
  baseURL="http://172.21.0.61:8989/masterService/City/list/authorized" ;
  baseURL2="http://172.21.0.61:8989/masterService/City/createCity" ;
  baseURL3="http://172.21.0.61:8989/masterService/City/id" ;
  baseURL4="http://172.21.0.61:8989/masterService/City/updateCity" ;


  id?:number;


  constructor(private httpClient:HttpClient) 
  { }

  getAllCity():Observable<Cityclass[]>{
    return this.httpClient.get<Cityclass[]>(`${this.baseURL}`);
  }

  AllCity(city?:Cityclass):Observable<object[]>{
    return this.httpClient.post<object[]>(`${this.baseURL2}`,city);
  }

  getId(cityId?:number){
    this.id=cityId;
    }
    GetCityById():Observable<object>{
      return this.httpClient.get<object[]>(`${this.baseURL3}/${this.id}`);
    
    }
    

    UpdateCityById(cityclass?:Cityclass):Observable<object>{
      return this.httpClient.post<object>(`${this.baseURL4}`,cityclass)
      }
}
