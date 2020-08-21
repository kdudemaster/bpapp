import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ReqsComponent } from './reqs/reqs.component';
import { ReqsLogComponent } from './reqs-log/reqs-log.component';
import { ReqCustomComponent } from './req-custom/req-custom.component';
import {  PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'requests', component: ReqsComponent },
  { path: 'requestsLog', component: ReqsLogComponent },
  { path: 'reqCustom', component: ReqCustomComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
