import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usina } from './../../model/usina';
import {UsinaService} from './../usinaService';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usina-detail',
  templateUrl: './usina-detail.component.html',
  styleUrls: ['./usina-detail.component.css'],
  providers : [UsinaService,Location,ToastrService]
})
export class UsinaDetailComponent implements OnInit {

  usina : Usina;

  constructor(private toastr : ToastrService, private usinaService : UsinaService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.usinaService.findUsinaById(id)
    .subscribe(u=>{
      this.usina = u;
    });
  }

  onSalvar() {
    this.usinaService.updateUsina(this.usina).subscribe(() => {
      this.toastr.success('Usina Atualizada com sucesso !!!', 'Ataualização!');
      this.onCancelar()
    });
  }

  onCancelar(){
    this.location.back();
  }
}
