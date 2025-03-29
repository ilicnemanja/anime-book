import { Component, Input } from '@angular/core';
import { AnimeCardItemComponent } from '../anime-card-item/anime-card-item.component';

@Component({
  selector: 'app-anime-cards-list',
  imports: [AnimeCardItemComponent, AnimeCardItemComponent],
  templateUrl: './anime-cards-list.component.html',
  styleUrl: './anime-cards-list.component.scss',
})
export class AnimeCardsListComponent {
  @Input() animeList: any[] = [];

  constructor() {}
}
