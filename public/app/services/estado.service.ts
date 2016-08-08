import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Pessoa} from '../entities/pessoa.entity.ts';

@Injectable()
export class EstadoService {

    private heroesUrl = '/api/pessoas';

    constructor(private http: Http) {}

    obterEstados():Promise<Pessoa[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res => { return res.json() });
    }

}