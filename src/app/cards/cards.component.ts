import { Component, Input } from '@angular/core';
import { RepoapiService } from '../services/repoapi.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
 
  @Input() repoUrl:any;
  @Input() selectedNumber: any;

 constructor(private repoapiService: RepoapiService){}

 ngOnInit(){
  this.numPages = this.selectedNumber;
 }
 myurl:any;
 data:any;
 p:number=1;
 numPages:number=10;
 toatalRepo:any;
 

 ngOnChanges(){
  if (this.repoUrl != null){
    console.log(this.repoUrl);
    this.getAll_repoDetails();
  }
 }

 getAll_repoDetails(){
  this.myurl=this.repoUrl
  this.data=this.repoapiService.getRepo(this.myurl,this.numPages,this.p).subscribe((userData: any) => {
    this.data = userData;
    this.toatalRepo = userData.length;});
    
    // console.log(this.data);
  // this.apiService.getUser(this.name).subscribe(console.log);
}


}
