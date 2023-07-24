import { Component } from '@angular/core';
import { ROUTE_LISTAR_PENSAMENTO } from 'src/app/routes';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  get routeListarPensamento(){
    return ROUTE_LISTAR_PENSAMENTO;
  }

  pesamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  }

  criarPensamento(event: any){
    event.preventDefault();
    console.log(event);
  }

  cancelar(event: any){
    console.log(event);
  }

}
