import { Component, inject, Input, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { AnimeCardsListComponent } from '../../components/anime-cards-list/anime-cards-list.component';

@Component({
  selector: 'app-anime-page',
  imports: [AnimeCardsListComponent],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.scss',
})
export class AnimePageComponent implements OnInit {
  @Input() topAnime: any[] = [];
  animeService: AnimeService = inject(AnimeService);

  constructor() {}

  ngOnInit() {
    this.animeService.getTopAnime(50).subscribe({
      next: (animeList) => (this.topAnime = animeList),
      error: (err) => console.error(err),
    });
  }
}
