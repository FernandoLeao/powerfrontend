import { Component, OnInit,ViewChild } from '@angular/core';
import { Equipamento } from './../../model/equipamento';
import {MatSort, MatTableDataSource} from '@angular/material';
import {EquipamentoService} from './../equipamentoService';


@Component({
  selector: 'app-equipamento-list',
  templateUrl: './equipamento-list.component.html',
  styleUrls: ['./equipamento-list.component.css'],
  providers : [EquipamentoService]
})
export class EquipamentoListComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'capacidadeTransmissao', 'ativoFormatado','agente','atualizar'];
  dataSource : MatTableDataSource<Equipamento>;

  constructor(private equipementoService : EquipamentoService) {
    
   }

  
   @ViewChild(MatSort) sort: MatSort;
   
     ngOnInit() {
          
       this.equipementoService.findAllEquipamentos()
       .subscribe(equipamentos=> {
          this.dataSource = new MatTableDataSource(equipamentos);
          this.dataSource.sort = this.sort;
       });
      
     }

}
