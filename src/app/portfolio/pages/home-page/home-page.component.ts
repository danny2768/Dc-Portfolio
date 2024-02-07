import { Component } from '@angular/core';

interface Quote {
  author: string;
  content: string;
}

@Component({
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public quotes: Quote[] = [
    {author: '', content: ''},
  ]

}
