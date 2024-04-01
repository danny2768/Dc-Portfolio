import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevelopmentComponent } from './pages/under-development/under-development.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UnderDevelopmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UnderDevelopmentComponent,
  ],
})
export class SharedModule {}
