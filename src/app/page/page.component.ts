import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router'; 
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public postId;
  public page:any;

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    public markdown:MarkdownService
  ) { }

  ngOnInit(): void {

    this.postId = this.route.snapshot.paramMap.get('id');
    this.getPost();

  }

  getPost(){

    const header = new HttpHeaders()
                  .set('Content-Type','application/json')
                  .set('Authorization','Bearer '+environment.strapi.apiKey)
    let url = environment.strapi.apiUrl+"/pages/"+this.postId;
    this.http.get(url, {headers:header}).subscribe(datas=>{
      console.log(datas);
      let res:any = datas;
      this.page = {
        content:this.markdown.compile(res.Content),
        title:res.Title
      }
    });


  }

}
