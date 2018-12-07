import { Component, OnInit } from '@angular/core';
import { FirebaseLinksService } from '../../services/firebase-links.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.css']

})
export class AboutComponent implements OnInit {
  skills = true;

  public barChartType:string = 'polarArea';
  public barChartLegend:boolean = true;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public radarChartType: string = 'radar';

  constructor( public _linkService: FirebaseLinksService ) { }

  ngOnInit() {
  }
   // Radar
   public radarChartLabels:string[] = ['Enjoy', 'Knowledge', 'Self-taught', 'Weekend lenguague', 'Learned in school'];
 
   public radarChartData:any = [
     {data: [100, 95, 80, 100, 20], label: 'MEAN FullStack'},
     {data: [90, 80, 80, 100, 20], label: 'Web Design'},
     {data: [60, 80, 20, 40, 80], label: 'J2EE'},
     {data: [70, 70, 20, 40, 80], label: 'Android'}
   ];

   // Bar
   // public barChartLabels:string[] = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Angular', 'NodeJS', 'MongoDB', 'Ionic', 'Java', 'Android'];
   public barChartLabels:string[] = ['Java', 'Android', 'Bootstrap', 'NodeJS', 'MongoDB', 'Angular', 'Ionic'];

   public barChartData:any[] = [
    {data: [80, 70, 90, 70, 80, 90, 80, 0], label: 'Developer Evolution'}
  ];
  
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
