import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppPrincipalComponent } from './app-principal/app-principal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
        MatListModule,MatCardModule,MatGridListModule,MatTableModule,
        MatInputModule,MatSlideToggleModule  } 
      from '@angular/material';
import { UsinaComponent } from './usina/usina.component';
import { AgenteComponent } from './agente/agente.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { CoberturaComponent } from './cobertura/cobertura.component';
import { UsinaListComponent } from './usina/usina-list/usina-list.component';
import { AgenteListComponent } from './agente/agente-list/agente-list.component';
import { EquipamentoListComponent } from './equipamento/equipamento-list/equipamento-list.component';
import { EquipamentoDetailComponent } from './equipamento/equipamento-detail/equipamento-detail.component';
import { UsinaDetailComponent } from './usina/usina-detail/usina-detail.component';
import { AgenteDetailComponent } from './agente/agente-detail/agente-detail.component';
import { TableListComponent } from './genericComponents/table-list/table-list.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AppPrincipalComponent,
    UsinaComponent,
    AgenteComponent,
    EquipamentoComponent,
    CoberturaComponent,
    UsinaListComponent,
    AgenteListComponent,
    EquipamentoListComponent,
    EquipamentoDetailComponent,
    UsinaDetailComponent,
    AgenteDetailComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot([
      {path : 'usina',component:UsinaComponent,data:{title:'Usina'}},
      {path : 'agente',component:AgenteComponent,data:{title:'Agente'}},
      {path : 'equipamento',component:EquipamentoComponent,data:{title:'Equipamento'}},
      {path : 'cobertura',component:CoberturaComponent,data:{title:'Cobertura'}},
      { path: 'usina/:id',      component: UsinaDetailComponent },
      { path: 'agente/:id',      component: AgenteDetailComponent },
      { path: 'equipamento/:id',      component: EquipamentoDetailComponent },
      {path : '',redirectTo : 'usina' ,pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
