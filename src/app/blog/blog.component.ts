import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap, ActivationEnd } from '@angular/router'; 
import { environment } from 'src/environments/environment';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public postId:string;
  public authKey:string;
  public blog:any = {
    content:"# markdown",
    thumbnail:{
      url:""
    }
  };
  public cdnUrl = environment.strapi.apiUrl

  constructor(
    public http:HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private markdown:MarkdownService,
  ) {

    

   }

  ngOnInit(): void {

    this.postId = this.route.snapshot.paramMap.get('id');
    this.getPost();
    // this.auth();
    
  }


  auth(){

    console.log('promise');
    const header = new HttpHeaders()
                  .set('Content-Type','application/json')
    let body = {
      identifier: 'hello@aurore.app',
      password: 'Simerca1411',
    }
    let url = environment.strapi.apiUrl+"auth/local";
    this.http.post(url,body, {headers:header}).subscribe(datas=>{
      console.log(datas);
      let res:any = datas;
      this.authKey = res.jwt;
    })
  }

  getPost(){

    const header = new HttpHeaders()
                  .set('Content-Type','application/json')
                  .set('Authorization','Bearer '+environment.strapi.apiKey)
    let url = environment.strapi.apiUrl+"/blogs/"+this.postId;
    this.http.get(url, {headers:header}).subscribe(datas=>{
      console.log(datas);
      let res:any = datas;
      this.blog = {
        content:this.markdown.compile(res.Content),
        title:res.Title,
        thumbnail:res.Thumbnail
      }
    });


  }

}
