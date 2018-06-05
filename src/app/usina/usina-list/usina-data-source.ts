import { Usina} from './../../model/usina';
import { UsinaService} from './../usinaService';

import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";

export class UsinaDataSource implements DataSource<Usina> {
    
        private usinaSubject = new BehaviorSubject<Usina[]>([]);
        private loadingSubject = new BehaviorSubject<boolean>(false);
    
        public loading$ = this.loadingSubject.asObservable();
    
        constructor(private usinaService: UsinaService) {}
    
        connect(collectionViewer: CollectionViewer): Observable<Usina[]> {
            return this.usinaSubject.asObservable();
        }
    
        disconnect(collectionViewer: CollectionViewer): void {
            this.usinaSubject.complete();
            this.loadingSubject.complete();
        }
    
        loadUsinas(usinaId: number, filter = '',
                    sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
    
            this.loadingSubject.next(true);
    
            this.usinaService.findAllUsinas().pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(usinas => this.usinaSubject.next(usinas));
        }    
    }