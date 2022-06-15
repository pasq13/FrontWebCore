import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  readonly ApiUrl = 'http://localhost:5000/api/';

  header: any;
  currentUserSubject: BehaviorSubject<any>;
  currentUser: any;
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.header = new HttpHeaders(headerSettings);
  }
  login(username: any, password: any) {
    const head = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  return this.http.post<any>(this.ApiUrl + 'jwt/login?' + 'correo=' + username + '&&' + 'pass=' + password, { headers: head })
    .pipe(map(user => {
      return user;
    }));
  }
  getHeroes(casa:any) {
    return this.http.get<any>(this.ApiUrl + 'heroes/'+casa)
    .pipe(map(heroes => {
      return heroes;
    }));
  }
  getOneHeroe(casa: string, id: number) {
    return this.http.get<any>(this.ApiUrl + 'heroes/'+casa+'/'+id)
    .pipe(map(heroes => {
      return heroes;
    }));
  }

}
