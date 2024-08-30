import { Component, OnDestroy, OnInit } from "@angular/core";

import { switchMap } from "rxjs";
import { Promocao } from "src/app/core/models/promocao";
import { PromocaoSignalRService } from "src/app/core/services/promocao-signalR.service";

@Component({
    selector: 'app-promocoes',
    templateUrl: './promocoes.component.html',
    styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit, OnDestroy {
    listPromocoes: Promocao[] = [];

    constructor(private promoSignalRService: PromocaoSignalRService) { }

    ngOnInit(): void {
        this.startSignalR();
    }

    ngOnDestroy(): void { 
        this.promoSignalRService.closeConnection().subscribe();
    }

    startSignalR() {
        this.promoSignalRService.startConnection()
            .pipe(
                switchMap(() => this.promoSignalRService.receiveReceberPromocao())
            ).subscribe((promocao: Promocao) => this.listPromocoes.push(promocao))
    }
}