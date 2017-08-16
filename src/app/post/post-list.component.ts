import { Component } from '@angular/core';
import { Post } from './post';

@Component({
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

    posts :Post[]
}