import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  post = {
    title: 'Title',
    isFavorite: false,
  };

  onFavoriteChange(isFavorite:boolean) {
    console.log('Inside onFavoriteChange ' + isFavorite);
  }
}
