import { BadInput } from './../bad-input';
import { NotFoundError } from './../not-found-error';
import { AppError } from './../app-error';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/posts",http);
  }




}
