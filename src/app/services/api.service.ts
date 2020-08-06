import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    private setHeader() {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': 'pt_BR'
        });

        return headers;
    }

    public get(url?: string, params?: HttpParams) {
        let options = {
            headers: this.setHeader(),
            params: params
        };

        return this.http.get(url, options);
    }

}
