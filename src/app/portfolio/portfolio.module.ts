import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ResumePDFComponent } from './components/resumePDF/resumePDF.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    LayoutPageComponent,
    HomePageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    ResumePDFComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    PdfViewerModule,
    SharedModule
  ],
})
export class PortfolioModule {}
