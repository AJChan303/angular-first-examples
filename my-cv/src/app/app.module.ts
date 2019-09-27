import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { EducationComponent } from './education/education.component';
import { GeneralComponent } from './general/general.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@NgModule({
  declarations: [
    AppComponent,
    WorkExpComponent,
    EducationComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
