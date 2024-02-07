import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevelopmentComponent } from './pages/under-development/under-development.component';


@NgModule({
  declarations: [
    UnderDevelopmentComponent
  ],
  imports: [CommonModule],
  exports: [
    UnderDevelopmentComponent,
  ],
})
export class SharedModule {}
