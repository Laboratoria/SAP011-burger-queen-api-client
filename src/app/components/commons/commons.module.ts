import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardProductComponent } from './card-product/card-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardProductComponent
  ]
})
export class CommonsModule { }
