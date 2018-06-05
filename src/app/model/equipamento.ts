import {Agente} from './agente';

export class Equipamento {
    
        constructor(public id : number,
            public nome : string, 
            public capacidadeTransmissao : number, 
            public ativo : boolean,
            public ativoFormatado : string,
            public agenteId: number, 
            public agente : string){
    
        }
    }