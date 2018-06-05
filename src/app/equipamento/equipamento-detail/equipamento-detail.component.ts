import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Equipamento } from './../../model/equipamento';
import {EquipamentoService} from './../equipamentoService';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipamento-detail',
  templateUrl: './equipamento-detail.component.html',
  styleUrls: ['./equipamento-detail.component.css'],
  providers : [EquipamentoService]
})
export class EquipamentoDetailComponent implements OnInit {

  equipamento : Equipamento;
  
    constructor(private toastr: ToastrService, private equipamentoService : EquipamentoService, private route: ActivatedRoute, private location: Location) {
      
     }
  
    ngOnInit() {
  
      const id = +this.route.snapshot.paramMap.get('id');
      this.equipamentoService.findEquipamentoById(id)
      .subscribe(eq=>{
        this.equipamento =eq;
      });
    }
  
    onSalvar() {
      this.equipamentoService.updateUsina(this.equipamento).subscribe(() => {
        this.toastr.success('Equipamento Atualizado com sucesso !!!', 'Ataualização!');
        this.onCancelar()
      });
    }
  
    onCancelar(){
      this.location.back();
    }  

}
