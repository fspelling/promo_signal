import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Promocao } from '../models/promocao';

@Injectable({
    providedIn: 'root',
})
export class PromocaoSignalRService {
    private connection: signalR.HubConnection;
    private urlBase: string = 'https://localhost:7004'

    constructor() {
        this.connection = new signalR.HubConnectionBuilder().withUrl(`${this.urlBase}/PromoHub`).build();
    }

    startConnection(): Observable<void> {
        return new Observable<void>(observer => {
            this.connection.start()
                .then(() => {
                    console.info("hub connect");

                    observer.next();
                    observer.complete();
                })
                .catch((error => {
                    console.error(error);
                    observer.error();
                }));
        });
    }

    sendCadastrarPromocao(promocao: Promocao): void {
        this.connection.invoke('CadastrarPromocao', promocao);
    }

    receiveCadastradoSucesso(): Observable<string> {
        return new Observable<string>(observer => {
            this.connection.on('cadastradoSucesso', (message) => observer.next(message));
        });
    }

    receiveReceberPromocao(): Observable<Promocao> {
        return new Observable<Promocao>(observer => {
            this.connection.on('receberPromocao', (promocao: Promocao) => observer.next(promocao));
        });
    }
}