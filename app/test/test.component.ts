import { NotFoundError } from './../not-found-error';
import { BadInput } from './../bad-input';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../app-error';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  name: string = '';
  friendList: any;
  condition: boolean = false;
  tableData: any;
  posts: any;

  constructor(private service: PostService) {
    this.name = 'Abhijeet';

    this.friendList = [
      { name: 'Rakesh', rank: 101 },
      { name: 'Harshal', rank: 26 },
      { name: 'Pushkar', rank: 236 },
      { name: 'Anup', rank: 13 },
    ];

    this.tableData = [
      {
        id: 1,
        name: 'Jack',
        email: 'jack@gmail.com',
        gender: 'male',
        salary: '34500',
      },
      {
        id: 2,
        name: 'Peter',
        email: 'peter@gmail.com',
        gender: 'male',
        salary: '53000',
      },
      {
        id: 3,
        name: 'Mary',
        email: 'mary@gmail.com',
        gender: 'female',
        salary: '50000',
      },
      {
        id: 4,
        name: 'Smith',
        email: 'smith@gmail.com',
        gender: 'male',
        salary: '13200',
      },
      {
        id: 5,
        name: 'John',
        email: 'john@gmail.com',
        gender: 'male',
        salary: '13000',
      },
    ];
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.posts = response;
    });
  }

  savePost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.create(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
        } else throw error;
      }
    );
  }

  updatePost(post: any) {
    this.service.update(post).subscribe(
      (response) => {},
      (error: AppError) => {
        if (error instanceof BadInput) {
        } else throw error;
      }
    );
  }

  deletePost(post: any) {
    this.service.delete(3661).subscribe(
      (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post is already deleted');
        } else throw error;
      }
    );
  }
}
