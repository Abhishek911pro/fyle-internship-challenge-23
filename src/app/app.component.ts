import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  item="";

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
    this.apiService.getUser(this.item).subscribe(console.log);
    console.log(this.item);
  }
}
