import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PromocaoForm } from "./models/promocaoForm";

import { PromocaoSignalRService } from "src/app/core/services/promocao-signalR.service";
import { Promocao } from "src/app/core/models/promocao";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-cadastro-promocao',
  templateUrl: './cadastro-promocao.component.html',
  styleUrls: ['./cadastro-promocao.component.scss']
})
export class CadastroPromocaoComponent implements OnInit {
  formPromocao: FormGroup<PromocaoForm>;
  messageCadastro: string;

  ngOnInit(): void {
    this.loadForm();
    this.startSignalR();
  }

  constructor(private fb: FormBuilder, private promoSignalRService: PromocaoSignalRService) { }

  loadForm() {
    this.formPromocao = this.fb.group({
      empresa: ['', Validators.required],
      chamada: ['', Validators.required],
      regras: ['', Validators.required],
      enderecoUrl: ['', Validators.required]
    });
  }

  startSignalR() {
    this.promoSignalRService.startConnection()
      .pipe(
        switchMap(() => this.promoSignalRService.receiveCadastradoSucesso())
      ).subscribe(message => this.messageCadastro = message);
  }

  salvar() {
    const objPromo = this.formPromocao.value;
    this.promoSignalRService.sendCadastrarPromocao(objPromo as Promocao);
  }
}