import { Component, OnInit,ViewChild } from '@angular/core';
import { Usina } from './../../model/usina';
import {MatSort, MatTableDataSource} from '@angular/material';
import {UsinaService} from './../usinaService';


@Component({
  selector: 'app-usina-list',
  templateUrl: './usina-list.component.html',
  styleUrls: ['./usina-list.component.css'],
  providers : [UsinaService]
})
export class UsinaListComponent implements OnInit {
  
  displayedColumns = ['id', 'nome', 'capacidadeGeracao', 'valorHora','atualizar'];
  dataSource : MatTableDataSource<Usina>;
  
  constructor(private usinaService : UsinaService) {
    
   }


   @ViewChild(MatSort) sort: MatSort;
 
   ngOnInit() {
        
     this.usinaService.findAllUsinas().subscribe(usinas=> {
        this.dataSource = new MatTableDataSource(usinas);
        this.dataSource.sort = this.sort;
     });
    
   }


}
