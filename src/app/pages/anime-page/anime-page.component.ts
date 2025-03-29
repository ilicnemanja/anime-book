import { Component, inject, Input } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-page',
  imports: [],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.scss',
})
export class AnimePageComponent {
  @Input() topAnime: any[] = [];
  animeService: AnimeService = inject(AnimeService);

  constructor() {}

  ngOnInit() {
    this.animeService.getTopAnime(10).subscribe({
      next: (animeList) => (this.topAnime = animeList),
      error: (err) => console.error(err),
    });
  }
}
