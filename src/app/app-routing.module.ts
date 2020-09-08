import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainViewComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}