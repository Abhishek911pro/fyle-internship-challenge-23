import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoapiService {

  constructor(private httpClient: HttpClient) { }

getRepo(myUrl: any) {
  return this.httpClient.get(`${myUrl}`);
}
}