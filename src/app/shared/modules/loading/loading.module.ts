import { LoadingCardComponent } from './../../components/loading-card/loading-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxContentLoadingModule } from 'ngx-content-loading';

@NgModule({
  imports: [
    CommonModule,
    NgxContentLoadingModule
  ],
  declarations: [
    LoadingCardComponent
  ],
  exports: [
    LoadingCardComponent
  ]
})
export class LoadingModule { }
