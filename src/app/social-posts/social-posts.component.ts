import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: "Post Header 1", thought: "Body of the first post. Going to add a bunch of extra words."},
    { title: "Post Header 2", thought: "Body of the second post. Going to add a bunch of extra words."},
    { title: "Post Header 3", thought: "Body of the third post. Going to add a bunch of extra words to see what happens with the wrapping."},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
