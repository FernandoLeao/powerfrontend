import {Injectable} from '@angular/core';
import {Agente} from './../model/agente';

import {HttpClient, HttpParams,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map,tap,catchError} from "rxjs/operators";

import {environment} from './../../environments/environment';
import { of } from 'rxjs';

@Injectable()
export class  AgenteService {

    constructor(private http:HttpClient) {

    }

    findAgenteById(usinaId: number): Observable<Agente> {
        var url = environment.apiBaseUrl +    `api/agente/${usinaId}`;
        return this.http.get<Agente>(url)
        .pipe(
            map(el => {
                console.log(el.nome);
                return new  Agente(el.id,el.nome,el.necessidadeDiariaEnergia); 
            })
        );
    }

    findAllAgentes(): Observable<Agente[]> {
        var url = environment.apiBaseUrl + 'api/agente';
        return this.http.get<Agente[]>(url)
            .pipe(
                    map(data => {
                        return data.map(el=>new Agente(el.id,el.nome,el.necessidadeDiariaEnergia)); 
                    })
            );
    }

    updateUsina(agente:Agente) :  Observable<any>  {
        var url = environment.apiBaseUrl + 'api/agente';

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };

        return this.http.put(url,agente,httpOptions).pipe(
            tap(_ => this.log(`updated usina id=${agente.id}`)),
            catchError(this.handleError<Agente>('updateHero'))
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