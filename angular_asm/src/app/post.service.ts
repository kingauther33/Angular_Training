import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post/post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
