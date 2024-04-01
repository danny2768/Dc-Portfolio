import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderDevelopmentComponent } from './shared/pages/under-development/under-development.component';


const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioModule )
  },
  {
    path: 'under-development',
    component: UnderDevelopmentComponent,
  },
  {
    path: '**',
    redirectTo: 'portfolio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
