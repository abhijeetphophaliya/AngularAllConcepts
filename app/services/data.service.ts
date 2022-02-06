import { BadInput } from './../bad-input';
import { NotFoundError } from './../not-found-error';
import { AppError } from './../app-error';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.HandleError));
  }

  create(resource: any) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.HandleError));
  }

  update(resource: any) {
    return this.http
      .put(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(catchError(this.HandleError));
  }

  delete(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.HandleError));
  }

  private HandleError(error: Response) {
    if (error.status === 400) {
      return throwError(new NotFoundError(error));
    } else if (error.status === 404) {
      return throwError(new BadInput(error));
    } else return throwError(new AppError(error));
  }
}
