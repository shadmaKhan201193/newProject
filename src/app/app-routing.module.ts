import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CityCrudComponent } from './city-crud/city-crud.component';
import { CityListComponent } from './city-list/city-list.component';
import { CountryCrudComponent } from './country-crud/country-crud.component';
import { CountryComponent } from './country/country.component';
import { GenderCrudComponent } from './gender-crud/gender-crud.component';
import { GenderListComponent } from './gender-list/gender-list.component';
import { LoginComponent } from './login/login.component';
import { UpdateCityComponent } from './update-city/update-city.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { UpdateGenderComponent } from './update-gender/update-gender.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'country',component:CountryComponent},
  {path:'countryCrud',component:CountryCrudComponent},
  {path:'updatecountry',component:UpdateCountryComponent},
  {path:'citylist',component:CityListComponent},
  {path:'cityCrud',component:CityCrudComponent},
  {path:'updatecity',component:UpdateCityComponent},
  {path:'genderlist',component:GenderListComponent},
  {path:'genderCrud',component:GenderCrudComponent},
  {path:'updategender',component:UpdateGenderComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
