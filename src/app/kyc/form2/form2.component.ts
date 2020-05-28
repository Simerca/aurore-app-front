import { Component, OnInit } from '@angular/core';
import { MangopayKyc } from '../../mangopay-kyc';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formstep2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  public buttonDisable:boolean = true;
  constructor(
    public kyc:MangopayKyc,
    public router:ActivatedRoute
  ) {

    this.router.queryParams.subscribe(params=>{

      this.kyc.userID = params['userId'];

    })

   }

  ngOnInit(): void {

    

  }

  verifDoc(){
 // if(this.kyc.docValid1 && this.kyc.docValid2 && this.kyc.docValid3){

  if(this.kyc.docValid1 && this.kyc.docValid2 && this.kyc.docValid4){
    this.buttonDisable = false;
    console.log(this.buttonDisable);
  }
  }

  createDoc(type,event){
    console.log('creating ...');
    this.kyc.createDocument(type,event);
   
  }


}
