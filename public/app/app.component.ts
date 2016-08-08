import {Component, OnInit} from '@angular/core';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

import {Pessoa} from './entities/pessoa.entity.ts';
import {EstadoService} from './services/estado.service';

@Component({
    selector: 'partial-content',
    template: `
    <p-dataTable [value]="pessoas">
        <p-column *ngFor="let col of cols" [field]="col.field" [header]="col.header" [filter]="true" [sortable]="true"></p-column>
    </p-dataTable>
    `,
    directives: [DataTable, Column]
})
export class AppComponent implements OnInit {

    pessoas: Pessoa[] = [];

    cols: any[];

    constructor(private estadoservice: EstadoService) { }

    ngOnInit() {
        this.estadoservice.obterEstados().then(pessoas => this.pessoas = pessoas);

        this.cols = [
            {field: 'id', header: 'Código'},
            {field: 'nome', header: 'Nome'},
            {field: 'cpf', header: 'CPF'}
        ];
    }

}