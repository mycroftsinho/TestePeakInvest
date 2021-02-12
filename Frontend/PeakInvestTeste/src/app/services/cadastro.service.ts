import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';


const httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()

export class CadastroService {
    private accessPointUrlLocal = 'https://localhost:5001/api';

    constructor(private http: HttpClient) {
    }

    CalcularValor(cadastro: Cadastro): Observable<any> {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(cadastro);
        console.log(body)
        return this.http.post(this.accessPointUrlLocal + '/Cadastro', body, { 'headers': headers })
    }
}