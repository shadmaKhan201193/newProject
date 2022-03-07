import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,private router: Router) { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }


}
