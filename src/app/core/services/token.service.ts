import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged, tap } from 'rxjs/operators';;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token:any ;
  private accessToken = 'accessToken';
  private expiresIn = 'expiresIn';
  private email = 'email';
  private fullName = 'fullName';
  private firstName = 'firstName';
   lastName = 'lastName';
   contactId = 'contactId';
   userData: UserData | undefined;
  isUserAuth: boolean | undefined;
  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.accessToken, token);
  }

  getToken(): string {
    this.token= localStorage.getItem(this.accessToken);
    return this.token;
  }
  setTokenExpiration(tokenExpiration: number): void {
    localStorage.setItem(this.expiresIn, tokenExpiration.toString());
  }

  // setUserData(userData: UserData) {
  //   this.userData = userData;
  //   localStorage.setItem(this.email, userData.Email);
  //   // localStorage.setItem(this.fullName, `${userData.FirstName} ${userData.LastName}`);
  //   // localStorage.setItem(this.firstName, userData.FirstName);
  //   // localStorage.setItem(this.lastName, userData.LastName);
  //   // localStorage.setItem(this.contactId, userData.ContactId);
  // }
  checkIfTokenExpired(tokenExpiration: number): boolean {
    const today = new Date();
    const expiryDate = new Date(today.getTime() + tokenExpiration * 1000);
    if (today > expiryDate) {
      return true;
    } else {
      return false;
    }
  }
  // getEmail(): string {
  //   return localStorage.getItem(this.email);
  // }
  // getContactId(): string {
  //   return localStorage.getItem(this.contactId);
  // }
  private clear(): void {
    this.token!= null;
    this.userData!= null;
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.expiresIn);
    localStorage.removeItem(this.email);
    // localStorage.removeItem(this.fullName);
    // localStorage.removeItem(this.firstName);
    // localStorage.removeItem(this.lastName);
    // localStorage.removeItem(this.contactId);
  }
  private getUserDataFromLocalStorage() {
    return {
      // ContactId: localStorage.getItem(this.contactId),
    Email:localStorage.getItem(this.email),
      // FirstName: localStorage.getItem(this.firstName),
      // LastName: localStorage.getItem(this.lastName),

    };
  }
  logout(): void {
    this.clear();
  }
  // isAuthenticated(): Observable<boolean> {
  //   return interval().pipe(
  //     map(() =>
  //       localStorage.getItem(this.accessToken) !== null && !this.checkIfTokenExpired(Number(localStorage.getItem(this.expiresIn))),
  //       distinctUntilChanged()
  //     ));
  // }
   isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    if (token != undefined || token != null){
      this.isUserAuth = true;

      return true;
    }
    else{
      this.isUserAuth = false;

      return false;
    }
  }
  getUserData(): Observable<UserData> {
    return interval().pipe(
      map(() => this.userData!|| this.getUserDataFromLocalStorage()),
      distinctUntilChanged()
    );
  }
}


interface UserData {
  Email: string;
  // FirstName: string;
  // LastName: string;
  // ContactId: string;
}