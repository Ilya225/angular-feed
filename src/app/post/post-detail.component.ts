import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from './post.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {

    post;

    constructor(
        private postService :PostService,
        private route :ActivatedRoute
    ) {}

    ngOnInit() :void {
        //this.postService.getPostById();
        this.route.paramMap
        .switchMap((params: ParamMap) => this.postService.getPostById(params.get('postId')))
        .subscribe(post => this.post = post);
    }
}