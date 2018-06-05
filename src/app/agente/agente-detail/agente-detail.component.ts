import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Agente } from './../../model/agente';
import {AgenteService} from './../agenteService';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agente-detail',
  templateUrl: './agente-detail.component.html',
  styleUrls: ['./agente-detail.component.css'],
  providers : [AgenteService]
})
export class AgenteDetailComponent implements OnInit {

    agente : Agente;
  
    constructor(private toastr: ToastrService, private agenteService : AgenteService, private route: ActivatedRoute, private location: Location) {
      
     }
  
    ngOnInit() {
  
      const id = +this.route.snapshot.paramMap.get('id');
      this.agenteService.findAgenteById(id)
      .subscribe(agente=>{
        this.agente =agente;
      });
    }
  
    onSalvar() {
      this.agenteService.updateUsina(this.agente).subscribe(() => {
        this.toastr.success('Agente Atualizado com sucesso !!!', 'Ataualização!');
        this.onCancelar()
      });
    }
  
    onCancelar(){
      this.location.back();
    }  

}
