import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert-service';

@Injectable()
export class HttpService {
    private baseUrl = 'http://localhost:5000/api';

    constructor(private httpClient : HttpClient, private alertService:AlertService){
    }

    get(url : string, paramData ?: any) : Observable<any> {
        const data = {params : paramData}
        return this.httpClient.get(this.baseUrl + url, data).pipe(catchError(this.errorHandler.bind(this)));
    }
    post(url : string, body : any) : Observable<any>{
        return this.httpClient.post(this.baseUrl + url , body).pipe(catchError(this.errorHandler.bind(this)));
    }
    private errorHandler(response:any){
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        const message = response.message;
        const status = response.status;
        if(status === 401){
            // user ko logout krna h and then send him to login page again
        }
        if(key === 'isTrusted'){
            this.alertService.error('Please connect to Internet');
        }
        else{
            this.alertService.error(message);
        }
        return throwError({message, error});
    }

}