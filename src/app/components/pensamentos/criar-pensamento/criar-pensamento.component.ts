import { Component, Input } from '@angular/core';
import { ROUTE_LISTAR_PENSAMENTO } from 'src/app/routes';
import { PensamentoDTO } from '../dto/pensamento-dto';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  get routeListarPensamento(){
    return ROUTE_LISTAR_PENSAMENTO;
  }

  @Input() pensamento: PensamentoDTO;

  criarPensamento(event: any){
    event.preventDefault();
    console.log(event);
  }

  cancelar(event: any){
    console.log(event);
  }

}
