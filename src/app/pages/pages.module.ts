import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**modulos */
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UploadComponent } from './upload/upload.component';
import { UsuarioComponent } from './mantenimientos/usuario/usuario.component';
import { HospitalComponent } from './mantenimientos/hospital/hospital.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    UploadComponent,
    UsuarioComponent,
    HospitalComponent,
    MedicosComponent
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
