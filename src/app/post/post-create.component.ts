import { selector } from 'rxjs/operator/multicast';
import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
})
export class PostCreateComponent {

    constructor(
        private postService :PostService
    ) {}
}