import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Pais } from '../model/pais';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://restcountries.eu/rest/v2/';
//const apiUrl = 'http://localhost:8083/api/';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  handleError: any;

  constructor(private http: HttpClient) { }

  getAllPaises(): Observable<Pais[]> {
    //return this.http.get<Pais[]>(`${apiUrl}paises`);
    return this.http.get<Pais[]>(`${apiUrl}all`);
  }

  getPaisesByName(name: string): Observable<Pais> {
    return this.http.get<Pais>(`${apiUrl}${name}`);
  }
/*
  addCases(cases: Cases): Observable<Cases> {
    return this.http.post<Cases>(apiUrl+'/cases-change/', cases, httpOptions).pipe(
      tap((c: Cases) => console.log(`added cases w/ id=${c._id}`)),
      catchError(this.handleError<Cases>('addCases'))
    );
  }

  updateCases(id: string, cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }

  deleteCases(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cases id=${id}`)),
      catchError(this.handleError<Cases>('deleteCases'))
    );
  }

  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url).pipe(
      tap(_ => console.log(`fetched statistic status=${status}`)),
      catchError(this.handleError<Statistic>(`getStatistic status=${status}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  */
}