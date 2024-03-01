import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginToken, User, LoggedInUser } from 'src/app/home/types/user.type';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {
  private autoLogoutTimer: any;
  private authToken!: string;
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  private loggedInUserInfo: BehaviorSubject<LoggedInUser> = new BehaviorSubject(
    <LoggedInUser>{}
  );

  constructor(private http: HttpClient) {
    this.loadToken();
  }
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated.value;
  }

  get isUserAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  get loggedInUser$(): Observable<LoggedInUser> {
    return this.loggedInUserInfo.asObservable();
  }

  get token(): string {
    return this.authToken;
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
    localStorage.setItem('email', token.user.email);
    this.isAuthenticated.next(true);
    this.loggedInUserInfo.next(token.user);
    this.setAutoLogoutTimer(token.expireInSeconds * 1000);
    this.authToken = token.token;
  }

  logout(): void {
    localStorage.clear();
    this.isAuthenticated.next(false);
    this.loggedInUserInfo.next(<LoggedInUser>{});
    clearTimeout(this.autoLogoutTimer);
  }

  private setAutoLogoutTimer(duration: number): void {
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  loadToken(): void {
    const token: string | null = localStorage.getItem('token');
    const expiry: string | null = localStorage.getItem('expiry');
    if (!token || !expiry) {
      return;
    } else {
      const expiresIn: number =
        new Date(expiry).getTime() - new Date().getTime();
      if (expiresIn > 0) {
        const firstName: string | null = localStorage.getItem('firstName');
        const lastName: string | null = localStorage.getItem('lastName');
        const address: string | null = localStorage.getItem('address');
        const city: string | null = localStorage.getItem('city');
        const state: string | null = localStorage.getItem('state');
        const pin: string | null = localStorage.getItem('pin');
        const email: string | null = localStorage.getItem('email');
        const user: LoggedInUser = {
          firstName: firstName !== null ? firstName : '',
          lastName: lastName !== null ? lastName : '',
          address: address !== null ? address : '',
          city: city !== null ? city : '',
          state: state !== null ? state : '',
          pin: pin !== null ? pin : '',
          email: email !== null ? email : '',
        };

        this.isAuthenticated.next(true);
        this.loggedInUserInfo.next(user);
        this.setAutoLogoutTimer(expiresIn);
      } else {
        this.logout();
      }
    }
  }
}
