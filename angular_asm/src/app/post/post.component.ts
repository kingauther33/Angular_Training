import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post.model";
import {PostService} from "../post.service";
import {ColumnMode} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  searchInput: string = '';

  columns = [
    { name: 'User ID', sortable: true },
    { name: 'ID', sortable: true },
    { name: 'Title', sortable: false },
    { name: 'Body', sortable: false },
    { name: 'Action', sortable: false }
  ];

  ColumnMode = ColumnMode;

  postLists: Post[] = [];
  fullPostLists: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.postLists = data;
      this.fullPostLists = data;
    })
  }

  onSearch() {
    this.postLists = this.fullPostLists
      .filter(post => post.title.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())
        || post.body.includes(this.searchInput.toLocaleLowerCase()))
  }

  removePost(removePost: Post) {
    this.fullPostLists = this.fullPostLists.filter(post => post.id !== removePost.id)
    this.postLists = this.fullPostLists;
  }

}
