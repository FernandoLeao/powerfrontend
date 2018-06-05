import { Component, OnInit,ViewChild } from '@angular/core';
import { Agente } from './../../model/agente';
import {MatSort, MatTableDataSource} from '@angular/material';
import {AgenteService} from './../agenteService';

@Component({
  selector: 'app-agente-list',
  templateUrl: './agente-list.component.html',
  styleUrls: ['./agente-list.component.css'],
  providers : [AgenteService]
})
export class AgenteListComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'necessidadeDiariaEnergia', 'atualizar'];
  dataSource : MatTableDataSource<Agente>;

  constructor(private agenteService : AgenteService) {
    
   }

  
   @ViewChild(MatSort) sort: MatSort;
   
     ngOnInit() {
          
       this.agenteService.findAllAgentes().subscribe(agentes=> {
          this.dataSource = new MatTableDataSource(agentes);
          this.dataSource.sort = this.sort;
       });
      
     }

}
