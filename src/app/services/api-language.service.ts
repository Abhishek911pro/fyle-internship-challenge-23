import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLanguageService {

  constructor(private httpClient: HttpClient) { }

  getLan(lanUrl: any) {
    return this.httpClient.get(`${lanUrl}`);
  }
}

