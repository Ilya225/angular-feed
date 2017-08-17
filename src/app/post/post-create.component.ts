import { selector } from 'rxjs/operator/multicast';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
})
export class PostCreateComponent {

    post:Post = new Post();

    constructor(
        private postService :PostService,
        private router :Router
    ) {}

    createPost(post :Post) {
        this.postService.createPost(post).then(post => {
            this.gotoPosts();
        });
    }

    gotoPosts(): void {
        let link = ['/posts'];
        this.router.navigate(link);
  }
}