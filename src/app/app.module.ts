import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { Form1Component } from './kyc/form1/form1.component';
import { Form2Component } from './kyc/form2/form2.component';
import { MangopayKyc } from './mangopay-kyc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './kyc/success/success.component';
import { WelcomComponent } from './kyc/welcom/welcom.component';
import { ArchiveComponent } from './archive/archive.component';
import { BetapublicComponent } from './betapublic/betapublic.component';
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PageComponent,
    Form1Component,
    Form2Component,
    SuccessComponent,
    WelcomComponent,
    ArchiveComponent,
    BetapublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MangopayKyc,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
