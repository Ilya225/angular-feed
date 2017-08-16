import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { API_BASE_URL } from '../app.config';

import { Post } from './post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {

    private postsUrl = 'api/posts';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http :Http) {}

    getPosts() :Promise<Post[]> {
        return this.http.get(`${API_BASE_URL}/${this.postsUrl}`, { headers: this.headers })
        .toPromise()
        .then( response => response.json() as Post[] )
        .catch(this.errorHandler);
    }

    errorHandler(err :any) :Promise<any> {
        return Promise.reject(err.message || err);
    }

    getPostById(id :number) :Promise<Post> {
        return this.http.get(`${API_BASE_URL}/api/post/${id}`, { headers: this.headers })
        .toPromise()
        .then( res => res.json().data)
        .catch(this.errorHandler);
    }


}