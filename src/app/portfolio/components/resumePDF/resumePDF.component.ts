import { Component, HostListener, Input } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'portfolio-resume-pdf',
  templateUrl: './resumePDF.component.html',
  styles: `
  .pdf-viewer {
    width: 80vw;
    display: block;
    margin: 0 auto;
  }
  `,
})
export class ResumePDFComponent {
  @Input({ required: true })
  public LanguageEnglish!: boolean;

  public pdfSrcEn: string;
  public pdfSrcEs: string;

  public screenHeight!: number;
  public screenWidth!: number;

  public zoomSize: number = 1;
  public heightVh: string = 'height: 175vh;';

  constructor(private portfolioService: PortfolioService) {
    this.pdfSrcEn = this.portfolioService.getResumeEnPath();
    this.pdfSrcEs = this.portfolioService.getResumeEsPath();

    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: Event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 768) {
      this.zoomSize = 0.5;
      this.heightVh = 'height: 62vh;';
    } else if (this.screenWidth < 1024) {
      this.zoomSize = 0.8;
    } else if (this.screenWidth >= 1024) {
      this.zoomSize = 1;
    } else {
      this.zoomSize = 1;
    }
  }
}
