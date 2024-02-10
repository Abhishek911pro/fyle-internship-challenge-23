import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: any) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  // getRepoData(repoData:any){
  //   return this.httpClient.get(`${repoData}`);
  // }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
