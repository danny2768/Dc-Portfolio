import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {
  public resumeEn: boolean = true;

  public resumeEnPath: string = '/assets/resume/Daniel_Cobos-Resume(en).pdf';
  public resumeEsPath: string = '/assets/resume/Daniel_Cobos-Resume.pdf';

}
