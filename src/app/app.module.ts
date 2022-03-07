import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,} from '@angular/material/button';
import {MatCheckboxModule,} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'  
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountryComponent } from './country/country.component';
import { CountryCrudComponent } from './country-crud/country-crud.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CityListComponent } from './city-list/city-list.component';
import { CityCrudComponent } from './city-crud/city-crud.component';
import { UpdateCityComponent } from './update-city/update-city.component';
import { GenderListComponent } from './gender-list/gender-list.component';
import { GenderCrudComponent } from './gender-crud/gender-crud.component';
import { UpdateGenderComponent } from './update-gender/update-gender.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    CountryComponent,
    CountryCrudComponent,
    UpdateCountryComponent,
    CityListComponent,
    CityCrudComponent,
    UpdateCityComponent,
    GenderListComponent,
    GenderCrudComponent,
    UpdateGenderComponent
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatDividerModule,MatIconModule,MatToolbarModule,MatFormFieldModule,
    AppRoutingModule,BrowserAnimationsModule,MatInputModule,MatButtonModule,MatCheckboxModule,MatCardModule
,MatTableModule,HttpClientModule,FormsModule,FlexLayoutModule,ReactiveFormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
