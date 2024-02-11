import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoapiService {

  constructor(private httpClient: HttpClient) { }
  myUrl:any;
  cPage:number=1;
  numPages:number=10;

getRepo(myUrl:any,cPage:number,numPages:number) {
  return this.httpClient.get(`${myUrl}?per_page=${numPages}$page=${cPage}`);
}
}