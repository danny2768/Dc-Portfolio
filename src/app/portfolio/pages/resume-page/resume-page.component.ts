import { Component, ElementRef, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {
  public resumeEn: boolean = true;

  public resumeEnPath: string;
  public resumeEsPath: string;

  constructor( private portfolioService: PortfolioService) {
    this.resumeEnPath = this.portfolioService.getResumeEnPath();
    this.resumeEsPath = this.portfolioService.getResumeEsPath();
  }



}
