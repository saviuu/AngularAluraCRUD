import { Component } from '@angular/core';
import { ROUTE_CRIAR_PENSAMENTO } from 'src/app/routes';
import { PensamentoDTO } from '../dto/pensamento-dto';


@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  get routeCriarPensamento(){
    return ROUTE_CRIAR_PENSAMENTO;
  }

  listaPensamentos: PensamentoDTO[] = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Sávio',
      modelo: 'modelo1'
    }
  ];

}
