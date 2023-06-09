import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificaComponent } from './modifica/modifica.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, ModificaComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class DashboardModule {}
