import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AuroreFront';
  public menusHeader:any;
  public menusFooter:any;

  constructor(
    private http:HttpClient,
  ){

  }

  ngOnInit(): void {

    this.getMenu('header');
    this.getMenu('footer');

  }

  getMenu(zone){

    let url = environment.strapi.apiUrl+"/menus?zone="+zone+"&_sort=order:ASC"
    const headers = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+environment.strapi.apiKey)

    this.http.get(url,{headers:headers}).subscribe(datas=>{
      let res:any = datas;
      switch(zone){
        case "header":
          this.menusHeader = res;
          break;
          case "footer":
            this.menusFooter = res;
          break;
      }
    })

  }

}
