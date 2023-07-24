export class PensamentoModel {
  id: string;
  conteudo: string;
  autoria: string;
  modelo: string;

  constructor(obj?: PensamentoModel) {
    this.id = obj?.id || '';
    this.conteudo = obj?.conteudo || '';
    this.autoria = obj?.autoria || '';
    this.modelo = obj?.modelo || '';
  }
}


