import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CardsRoutingModule } from './cards-routing.module';
import { FormsModule } from '@angular/forms'
import { SearchPipe } from '../pipe/pipe';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule
  ],
  exports: [
    SearchPipe
  ]
})
export class CardsModule { }
