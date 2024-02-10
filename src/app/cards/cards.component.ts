import { Component, Input } from '@angular/core';
import { RepoapiService } from '../services/repoapi.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 
  @Input() repoUrl:any;

 constructor(private repoapiService: RepoapiService){}

 ngOnInit(){
  
 }
 myurl:any;
 data:any;

 ngOnChanges(){
  if (this.repoUrl != null){
    console.log(this.repoUrl);
    this.getAll_repoDetails();
  }
 }

 getAll_repoDetails(){
  this.myurl=this.repoUrl
  this.data=this.repoapiService.getRepo(this.myurl).subscribe((userData: any) => {
    this.data = userData;});
    // console.log(this.data);
  // this.apiService.getUser(this.name).subscribe(console.log);
}


}
