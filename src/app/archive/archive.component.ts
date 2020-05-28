import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  public blogPost:any;
  public cdnUrl:any;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    
    this.cdnUrl = environment.strapi.apiUrl;
    this.getBlogPosts();

  }


  getBlogPosts(){

    let url = environment.strapi.apiUrl+"/blogs";
    const header = new HttpHeaders()
                    .set('Content-Type','application/json')
                    .set('Authorization','Bearer '+environment.strapi.apiKey);

    this.http.get(url,{headers:header}).subscribe(datas=>{
      let res:any = datas;
      this.blogPost = res;
      console.log(this.blogPost);
    })
  }

}
