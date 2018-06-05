import { Component, OnInit } from '@angular/core';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {environment} from './../../environments/environment';
@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css']
})
export class CoberturaComponent implements OnInit {

  constructor(private location: Location) { }


  ngOnInit() {
  }
  
  getCobertura(){
    var url = environment.apiBaseUrl +    'api/cobertura'
    location.replace(url);
  }
}
