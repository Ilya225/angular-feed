import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    private post :Post;
    private posts;

    constructor(private postService :PostService) {}

    ngOnInit() :void {
        this.getPosts();
    }

    getPosts() :void {
        this.postService.getPosts().then( (posts) => {
            this.posts = posts;
            this.post = posts[0];
        });
    }
}