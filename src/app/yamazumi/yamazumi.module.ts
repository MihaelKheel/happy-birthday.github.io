import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from '../bootstrap.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AssociateComponent } from './pages/associate/associate.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AssociateComponent,
    ComparisonComponent
  ],
  exports: [
    AssociateComponent,
    ComparisonComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    NgChartsModule,
    SharedModule
  ]
})
export class YamazumiModule { }
