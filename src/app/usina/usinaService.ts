import {Injectable} from '@angular/core';
import {Usina} from './../model/usina';

import {HttpClient, HttpParams,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map,tap,catchError} from "rxjs/operators";

import {environment} from './../../environments/environment';
import { of } from 'rxjs';

@Injectable()
export class UsinaService {

    constructor(private http:HttpClient) {

    }

    findUsinaById(usinaId: number): Observable<Usina> {
        var url = environment.apiBaseUrl +    `api/usina/${usinaId}`;
        return this.http.get<Usina>(url)
        .pipe(
            map(el => {
                console.log(el.nome);
                return new  Usina(el.id,el.nome,el.capacidadeGeracao,el.valorHora); 
            })
        );
    }

    findAllUsinas(): Observable<Usina[]> {
        var url = environment.apiBaseUrl + 'api/usina';
        return this.http.get<Usina[]>(url)
            .pipe(
                    map(data => {
                        return data.map(el=>new Usina(el.id,el.nome,el.capacidadeGeracao,el.valorHora)); 
                    })
            );
    }

    updateUsina(usina:Usina) :  Observable<any>  {
        var url = environment.apiBaseUrl + 'api/usina';

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };

        return this.http.put(url,usina,httpOptions).pipe(
            tap(_ => this.log(`updated usina id=${usina.id}`)),
            catchError(this.handleError<Usina>('updateHero'))
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