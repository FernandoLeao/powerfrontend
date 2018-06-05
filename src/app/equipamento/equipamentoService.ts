import {Injectable} from '@angular/core';
import {Agente} from './../model/agente';
import {Equipamento} from './../model/equipamento';

import {HttpClient, HttpParams,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map,tap,catchError} from "rxjs/operators";

import {environment} from './../../environments/environment';
import { of } from 'rxjs';

@Injectable()
export class  EquipamentoService {

    constructor(private http:HttpClient) {

    }

    findEquipamentoById(equipamentoId: number): Observable<Equipamento> {
        var url = environment.apiBaseUrl +    `api/equipamento/${equipamentoId}`;
        return this.http.get<Equipamento>(url)
        .pipe(
            map(el => {
                console.log(el.nome);
                return new  Equipamento(
                        el.id,
                        el.nome,
                        el.capacidadeTransmissao,
                        el.ativo,
                        el.ativoFormatado,
                        el.agenteId,
                        el.agente); 
            })
        );
    }

    findAllEquipamentos(): Observable<Equipamento[]> {
        var url = environment.apiBaseUrl + 'api/equipamento';
        return this.http.get<Equipamento[]>(url)
            .pipe(
                    map(data => {
                        return data.map(el=>new  Equipamento(
                            el.id,
                            el.nome,
                            el.capacidadeTransmissao,
                            el.ativo,
                            el.ativoFormatado,
                            el.agenteId,
                            el.agente) ); 
                    })
            );
    }

    updateUsina(agente:Equipamento) :  Observable<any>  {
        var url = environment.apiBaseUrl + 'api/equipamento';

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };

        return this.http.put(url,agente,httpOptions).pipe(
            tap(_ => this.log(`updated usina id=${agente.id}`)),
            catchError(this.handleError<Equipamento>('updateHero'))
          );
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }


      private log(message: string) {
        // this.messageService.add('HeroService: ' + message);
      }
 
}