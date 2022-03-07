import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryDemo } from './country-demo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //baseURL="http://localhost:8183/country/list/authorized" ;
  baseURL="http://localhost:8183/country/list/authorized" ;
  baseURL2="http://localhost:8183/country/createCountry" ;
  baseURL3="http://localhost:8183/country/id" ;
  baseURL4="http://localhost:8183/country/updateCountry" ;
  baseURL5="http://localhost:8183/country/deleteCountry" ;

     id?:number;
     

  constructor(private httpClient:HttpClient) { }
  
getAllCountry():Observable<CountryDemo[]>{
  return this.httpClient.get<CountryDemo[]>(`${this.baseURL}`);
}

AllCountry(country?:CountryDemo):Observable<object[]>{
  return this.httpClient.post<object[]>(`${this.baseURL2}`,country);
}

getId(countryId?:number){
this.id=countryId;
}
GetCountryById():Observable<object>{
  return this.httpClient.get<object[]>(`${this.baseURL3}/${this.id}`);

}
UpdateCountryById(countrydemo?:CountryDemo):Observable<object>{
return this.httpClient.post<object>(`${this.baseURL4}`,countrydemo)
}

deleteCountryById(id?:any):Observable<object>{

  return this.httpClient.delete<object>(`${this.baseURL5}/${id}`);
}

}
