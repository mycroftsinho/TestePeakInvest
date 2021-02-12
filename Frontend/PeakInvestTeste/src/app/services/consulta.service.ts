import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()

export class ConsultaService {
    private accessPointUrlLocal = 'https://localhost:5001/api';

    constructor(private http: HttpClient) {
    }

    ConsultarNome(id): Observable<any> {
        return this.http.get(this.accessPointUrlLocal + '/Consulta', {
            params: {
                id: id
            }
        }).pipe(map(this.extractData));
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
}