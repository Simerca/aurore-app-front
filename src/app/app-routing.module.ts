import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { WelcomComponent } from './kyc/welcom/welcom.component';
import { Form1Component } from './kyc/form1/form1.component';
import { Form2Component } from './kyc/form2/form2.component';
import { SuccessComponent } from './kyc/success/success.component';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  { path: 'blog/:id', component: BlogComponent },
  { path: 'page/:id', component: PageComponent },
  { path: '', component: HomeComponent },
  { path: 'kyc', component: WelcomComponent },
  { path: 'kyc/step1', component: Form1Component },
  { path: 'kyc/step2', component: Form2Component },
  { path: 'kyc/success', component: SuccessComponent },
  { path: 'archive', component: ArchiveComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
