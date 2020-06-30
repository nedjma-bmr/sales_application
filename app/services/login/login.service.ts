import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from'rxjs/operators';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url='http://localhost/app/api';

  constructor(private http:HttpClient) { }

  login(credentials:User): Observable<string>{
    return this.http.post<{token : string}>(`${this.url}/login`, credentials).pipe(
      map(response=> response.token)
    );
  }
}
