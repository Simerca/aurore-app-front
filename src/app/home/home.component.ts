import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogPost:any;
  public cdnUrl:any;
  public homePages:any = {
    Content:""
  };

  constructor(
    private http:HttpClient,
    public markdown:MarkdownService,
  ) { 

    this.cdnUrl = environment.strapi.apiUrl;

  }

  ngOnInit(): void {

    this.getBlogPosts();
    this.getHomePage();
  }

  getBlogPosts(){

    let url = environment.strapi.apiUrl+"/blogs?_limit=3";
    const header = new HttpHeaders()
                    .set('Content-Type','application/json')
                    .set('Authorization','Bearer '+environment.strapi.apiKey);

    this.http.get(url,{headers:header}).subscribe(datas=>{
      let res:any = datas;
      this.blogPost = res;
      console.log(this.blogPost);
    })
  }

  getHomePage(){
    let url = environment.strapi.apiUrl+"/pages?isHome=true";
    const header = new HttpHeaders()
                    .set('Content-Type','application/json')
                    .set('Authorization','Bearer '+environment.strapi.apiKey);

    this.http.get(url,{headers:header}).subscribe(datas=>{
      let res:any = datas;
      this.homePages = res;
      res.forEach(pages=>{
        this.homePages = pages;
        this.homePages.Content = this.markdown.compile(this.homePages.Content);
      })
      console.log(this.homePages);
    })
  }

}
