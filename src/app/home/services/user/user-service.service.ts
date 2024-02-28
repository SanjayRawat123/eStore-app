import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/home/types/user.type';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    const url: string = 'http://localhost:3000/users/signup';
    return this.http.post(url, user);
  }

  login(email: string, password: string): Observable<any> {
    const url: string = 'http://localhost:3000/users/login';
    return this.http.post(url, { email: email, password: password });
  }
}
