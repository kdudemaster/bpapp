import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { ReqsComponent } from './reqs/reqs.component';
import { ReqsLogComponent } from './reqs-log/reqs-log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReqCustomComponent } from './req-custom/req-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReqsComponent,
    ReqsLogComponent,
    PageNotFoundComponent,
    ReqCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
