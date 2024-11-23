import { ApplicationRef, Component, inject, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-databindingex',
  templateUrl: './databindingex.component.html',
  styleUrl: './databindingex.component.css'
})
export class DatabindingexComponent implements OnInit {

  public tourName:string = 'Singapore';
  public tourImage:string = 'https://www.bing.com/th?id=OADD2.8452611219559_1JJB3YNR24S2SY5LXT&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=247&rs=2&qlt=100';
  public time:string = new Date().toLocaleTimeString();


   constructor() {
    const applicationRef = inject(ApplicationRef);
    applicationRef.isStable.pipe( first((isStable) => isStable) ).subscribe(() => {
      // Note that we don't need to use `runOutsideAngular` because `isStable`
      // emits events outside of the Angular zone when it's truthy (falsy values
      // are emitted inside the Angular zone).
      setTimeout(() => { 
        this.time = new Date().toLocaleTimeString();
       }, 1000);
    });

   
  }

  ngOnInit():void {
    
  }

  public getDate():string {
    return new Date().toLocaleDateString();
  }

  public getTime():string {
    return new Date().toLocaleTimeString();
  }

  // public updateTime():void {
  //   setInterval(() => {
  //     this.time = new Date().toLocaleTimeString();
  //   }, 1000);
  // }

}
