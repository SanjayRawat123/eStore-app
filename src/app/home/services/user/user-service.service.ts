import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginToken, User, LoggedInUser } from 'src/app/home/types/user.type';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  private loggedInUserInfo: BehaviorSubject<LoggedInUser> = new BehaviorSubject(
    <LoggedInUser>{}
  );
  constructor(private http: HttpClient) {}
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated.value;
  }

  get isUserAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  get loggedInUser$(): Observable<LoggedInUser> {
    return this.loggedInUserInfo.asObservable();
  }
  createUser(user: User): Observable<any> {
    const url: string = 'http://localhost:3000/users/signup';
    return this.http.post(url, user);
  }

  login(email: string, password: string): Observable<any> {
    const url: string = 'http://localhost:3000/users/login';
    return this.http.post(url, { email: email, password: password });
  }

  activateToken(token: LoginToken): void {
    console.log(token);
    localStorage.setItem('token', token.token);
    localStorage.setItem(
      'expiry',
      new Date(Date.now() + token.expireInSeconds * 1000).toISOString()
    );
    localStorage.setItem('firstName', token.user.firstName);
    localStorage.setItem('lastName', token.user.lastName);
    localStorage.setItem('address', token.user.address);
    localStorage.setItem('city', token.user.city);
    localStorage.setItem('state', token.user.state);
    localStorage.setItem('pin', token.user.pin);

    this.isAuthenticated.next(true);
    this.loggedInUserInfo.next(token.user);
  }
}
