import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { InitializeGuard } from '../initialize/initialize.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [InitializeGuard],
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
