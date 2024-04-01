import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevelopmentComponent } from './pages/under-development/under-development.component';
import { RouterModule } from '@angular/router';
import { DownloadButtonComponent } from './components/download-button/download-button.component';


@NgModule({
  declarations: [
    UnderDevelopmentComponent,
    DownloadButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UnderDevelopmentComponent,
    DownloadButtonComponent,
  ],
})
export class SharedModule {}
