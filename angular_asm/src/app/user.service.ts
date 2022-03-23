import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, startWith, Subject} from "rxjs";
import {Post} from "./post/post.model";
import {User} from "./user.model";

@Injectable({providedIn: 'root'})
export class UserService{
  login_url = "https://60dff0ba6b689e001788c858.mockapi.io/tokens";
  get_user_url = "https://60dff0ba6b689e001788c858.mockapi.io/users/"; // + userID
  private user: User = new User("", "", "");
  loggedInEmitter = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getUser(): User {
    return this.user;
  }

  setUser(id:string, name: string, createdAt: string, ) {
    this.user.id = id;
    this.user.name = name;
    this.user.createdAt = createdAt;
  }

  login(): Observable<any> {
    this.loggedInEmitter.next(true);
    return this.http.get<any>(this.login_url);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.get_user_url + userId);
  }
}
