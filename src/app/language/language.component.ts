import { Component, Input } from '@angular/core';
import { ApiLanguageService } from '../services/api-language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Input() urlLanguage:any;

  constructor(private languageApiService: ApiLanguageService){}
  lanUrl:any;
  data:any;

  ngOnChanges(){
    if (this.urlLanguage != null){
      console.log(this.urlLanguage);
      this.getAll_Languages();
    }
   }

   getAll_Languages(){
    this.lanUrl=this.urlLanguage;
    this.data=this.languageApiService.getLan(this.lanUrl).subscribe((userData: any) => {
      this.data = userData;});
      console.log(this.data);
    // this.apiService.getUser(this.name).subscribe(console.log);
  }

  getLanguageKeys(): string[] {
    return this.data ? Object.keys(this.data) : [];
  }
}

