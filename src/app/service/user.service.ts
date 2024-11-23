import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<User[]> {
    let dataURL = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(dataURL).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage:string = '';
    if(error.status==0) {
      errorMessage = `An error occurred : ${error.error}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }

    errorMessage += `\n Something bad happened please try again.`;
    return throwError(errorMessage);
  }

}
