import { Component, OnInit } from '@angular/core';
import { FirebaseLinksService } from '../../services/firebase-links.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  skills = true;

  constructor( public _linkService: FirebaseLinksService ) { }

  ngOnInit() {
  }
   // Radar
   public radarChartLabels:string[] = ['Enjoy', 'Knowledge', 'Self-taught', 'Weekend lenguague', 'Learned in school'];
 
   public radarChartData:any = [
     {data: [100, 95, 80, 100, 20], label: 'JavaScript FullStack'},
     {data: [90, 80, 80, 100, 20], label: 'Web Design'},
     {data: [60, 80, 20, 40, 80], label: 'J2EE'},
     {data: [70, 70, 20, 40, 80], label: 'Android'}
   ];
   public radarChartType: string = 'radar';
  
   // events
   public chartClicked(e: any): void {
     console.log(e);
   }
  
   public chartHovered(e: any): void {
     console.log(e);
   }

  changeSkills() {
    console.log('skill');
    this.skills = !this.skills;
  }

}
