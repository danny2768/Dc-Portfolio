import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-download-button',
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.css'
})
export class DownloadButtonComponent {
  private loadingTime: number = 1000;
  private blocked: boolean = false;

  @Input({required:true})
  public filePath!: string;

  @ViewChild('arrow', { static: true }) arrowRef?: ElementRef;
  @ViewChild('progress', { static: true }) progressRef?: ElementRef;
  @ViewChild('check', { static: true }) checkRef?: ElementRef;

  constructor() { }

  downloadResume() {
    if (this.blocked) return;
    this.blocked = true;

    // Create an anchor element
    const link = document.createElement('a');
    link.href = this.filePath;
    link.download = this.extractFilename(this.filePath);

    // Append the anchor to the body and programmatically click on it
    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the body after the download
    document.body.removeChild(link);

    // Simulate a loading time before resetting the blocked status
    setTimeout(() => {
      this.blocked = false;
    }, this.loadingTime);
  }

  private extractFilename(filepath: string): string {
    const parts = filepath.split('/');
    return parts[parts.length - 1];
  }


  onClick() {
    if (this.blocked) return;
    this.blocked = true;

    const arrow = this.arrowRef?.nativeElement;
    const progress = this.progressRef?.nativeElement;
    const check = this.checkRef?.nativeElement;

    if (!arrow || !progress || !check) {
      console.error('One of the elements is null');
      return;
    }

    arrow.classList.add("animate-down");

    let percent = 0;
    let load = setInterval(() => {
      percent++;
      progress.style.height = percent + "%";
    }, this.loadingTime / 100);

    setTimeout(() => {
      clearInterval(load);

      setTimeout(() => {
        progress.classList.remove("bg-opacity-20");
        progress.classList.add("bg-opacity-0");
        check.classList.remove("w-0");
        check.classList.add("w-5");

        setTimeout(() => {
          check.classList.add("w-0");
          check.classList.remove("w-5");
          setTimeout(() => {
            this.reset();
          }, 1000);
        }, 1000);
      }, 500);
    }, this.loadingTime);
  }

  reset() {
    const progress = this.progressRef?.nativeElement;
    const arrow = this.arrowRef?.nativeElement;

    if (!progress || !arrow) {
      console.error('One of the elements is null');
      return;
    }

    progress.style.height = "0%";
    arrow.classList.remove("animate-down");

    setTimeout(() => {
      progress.classList.remove("bg-opacity-0");
      progress.classList.add("bg-opacity-20");
      this.blocked = false;
    }, 200)
  }
}
