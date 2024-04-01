import { Component, Input } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'portfolio-resume-pdf',
  templateUrl: './resumePDF.component.html',
})
export class ResumePDFComponent {

  @Input({required: true})
  public LanguageEnglish!: boolean;

  public pdfSrcEn: string;
  public pdfSrcEs: string;

  constructor( private portfolioService: PortfolioService) {
    this.pdfSrcEn = this.portfolioService.getResumeEnPath();
    this.pdfSrcEs = this.portfolioService.getResumeEsPath();
  }


}
