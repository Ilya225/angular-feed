import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { API_BASE_URL, createPost, updatePost, deletePost, allPosts, onePost } from '../app.config';

import { Post } from './post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {

    private postsUrl = 'api/posts';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http :Http) {}

    /**
     * Get all posts
     */
    getPosts() :Promise<Post[]> {
        return this.http.get(`${API_BASE_URL}/${allPosts}`, { headers: this.headers })
        .toPromise()
        .then( response => response.json() as Post[] )
        .catch(this.errorHandler);
    }

    /**
     * Create a new post and return it 
     */
    createPost(post :Post) :Promise<Post> {
        return this.http.post(`${API_BASE_URL}/${createPost}`, JSON.stringify(post), { headers: this.headers })
        .toPromise()
        .then( res => res.json() as Post)
        .catch(this.errorHandler);
    }

    /**
     * Error handler
     * @param err 
     */
    errorHandler(err :any) :Promise<any> {
        //TODO error handler improvement
        return Promise.reject(err.message || err);
    }

    /**
     * Get post by id
     * @param id 
     */
    getPostById(id :number) :Promise<Post> {
        return this.http.get(`${API_BASE_URL}/${onePost}${id}`, { headers: this.headers })
        .toPromise()
        .then( res => res.json().data)
        .catch(this.errorHandler);
    }


}