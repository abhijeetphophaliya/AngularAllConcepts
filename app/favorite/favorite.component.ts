import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() {
    this.isFavorite = true;
  }

  ngOnInit(): void {}

  post = {
    title: 'Title',
    isFavorite: false,
  };

  onFavoriteChange(isFavorite:boolean) {
    console.log('Inside onFavoriteChange ' + isFavorite);
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
