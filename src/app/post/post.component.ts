import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    post :Post;
    posts;

    constructor(private postService :PostService) {}

    ngOnInit() :void {
        this.getPosts();
    }

    getPosts() :void {
        this.postService.getPosts().then( (posts) => {
            console.log(posts);
            this.posts = posts;
        });
    }

    deletePost(post :Post): void {
        this.postService.deletePost(post._Id).then(res => {
            this.posts = this.posts.filter( p => p !== post)
            console.log(this.posts)
        });
    }
}