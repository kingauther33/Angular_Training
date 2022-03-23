import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../post.model";
import {PostService} from "../../post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: number | undefined;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id == null ? 0 : +id;
    this.postService.getPosts().subscribe(datas => {
      this.post = datas.find(data => data.id == this.id);
    })
  }
}
