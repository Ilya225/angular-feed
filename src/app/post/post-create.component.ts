import { selector } from 'rxjs/operator/multicast';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
})
export class PostCreateComponent {

    post:Post = new Post();

    constructor(
        private postService :PostService
    ) {}

    createPost(post :Post) {
        this.postService.createPost(post).then(post => console.log(post));
    }
}