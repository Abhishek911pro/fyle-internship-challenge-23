import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() searchTerm:any ;

  constructor() { }

  ngOnInit(){
  }
  // urlRepo: any;

  // runFunction(userData: any) {
  //   this.urlRepo = userData.repos_url;
  //     console.log(this.urlRepo);
  // }


}
