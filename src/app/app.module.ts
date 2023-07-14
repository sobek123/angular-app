import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car/car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { CarService } from './car/car/car.service';
import { AppendPipe } from './pipe/append.pipe';
import { Test3Component } from './test3/test3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    TestComponent,
    Test2Component,
    AppendPipe,
    Test3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
