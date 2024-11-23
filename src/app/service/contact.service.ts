import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  public getAllContacts(): Observable<Contact[]> {
    let dataUrl:string = `https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json`;
    return this.httpClient.get<Contact[]>(dataUrl).pipe(
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
