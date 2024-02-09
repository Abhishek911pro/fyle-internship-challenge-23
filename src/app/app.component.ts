import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  item="johnpapa";
  name="";
  data:any;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }

  getInput(e:any){
    this.item=e.target.value;
    // console.log(this.item);
  }

  submit_input(){

    this.name=this.item;
    this.data=this.apiService.getUser(this.name).subscribe((userData: any) => {
      this.data = userData;});
    // this.apiService.getUser(this.name).subscribe(console.log);
  }
}
