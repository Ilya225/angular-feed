import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'post-category-create',
    templateUrl: './post-category-create.html'
})
export class PostCategoryCreateComponent {

    post: Post = new Post();

    constructor() {}

    createPost(post) {}
}