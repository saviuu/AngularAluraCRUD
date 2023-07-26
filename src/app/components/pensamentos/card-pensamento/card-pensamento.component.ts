
import { Component, Input } from '@angular/core';
import { PensamentoDTO } from '../dto/pensamento-dto';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent {

  @Input()
  get pensamento() {
    return this._pensamentoCard;
  }

  set pensamento(val: any) {
    if (val !== undefined || val !== null) this._pensamentoCard = val;
  }

  private _pensamentoCard: any;

 }

